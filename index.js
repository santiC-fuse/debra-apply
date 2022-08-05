import { applicationData, vehicleData } from "./constants/index.js";
import {
  addByVinService,
  addSsnLast4Service,
  applicationService,
  creditDecisionService,
  selectedLoanService,
  softCreditService,
  usersService,
  validateLicensePlateService,
  valuationService,
} from "./services/apply.js";
import {
  addCoapplicantToApplication,
  addUserToApplication,
  getUserToApply,
  handleSoftCreditNextPage,
  validateAndUsePhoneNumber,
} from "./helpers/index.js";

const applyApplicant = async (applicationData, applicant, vehicle) => {
  applicationData = addUserToApplication(applicant, applicationData);

  const application = await applicationService(applicationData);

  await valuationService(application.state.code, vehicle.mileage, vehicle.id);

  let softCredit = await softCreditService(application.id);

  if (softCredit.nextPage !== "multiple_loans") {
    softCredit = await handleSoftCreditNextPage(
      softCredit.nextPage,
      applicant,
      application
    );
  }

  await selectedLoanService(softCredit.creditXpn[0].id);

  const creditDecisionReq = await creditDecisionService(application.id);

  console.log(
    `Offer Type: ${creditDecisionReq.offer_type}\nPrequal Offer Id: ${creditDecisionReq.prequalOfferId}`
  );
};

const applyCoapplicant = async (applicationData, applicant, vehicle) => {
  applicationData = addCoapplicantToApplication(applicationData);
  applicationData = addUserToApplication(applicant, applicationData);

  const application = await applicationService(applicationData);

  await valuationService(application.state.code, vehicle.mileage, vehicle.id);

  let softCredit = await softCreditService(application.id);

  if (softCredit.nextPage !== "multiple_loans") {
    softCredit = await handleSoftCreditNextPage(
      softCredit.nextPage,
      applicant,
      application
    );
  }

  await selectedLoanService(softCredit.creditXpn[0].id);

  const creditDecisionReq = await creditDecisionService(application.id);

  console.log(
    `Offer Type: ${creditDecisionReq.offer_type}\nPrequal Offer Id: ${creditDecisionReq.prequalOfferId}`
  );
};

const main = async () => {
  try {
    const userToApply = process.argv[3];
    const applicant = getUserToApply(userToApply);
    applicant.phone = validateAndUsePhoneNumber(process.argv[4]);

    const vehicle = vehicleData;
    let application = applicationData;

    const userReq = await usersService(applicant);
    const { id, applicationId } = userReq;

    applicant.id = id;
    application.id = applicationId;
    application.applicationId = applicationId;

    await addSsnLast4Service(applicant.id, applicant.ssnLast4);

    const validateLicensePlateReq = await validateLicensePlateService(
      vehicle.licensePlate,
      vehicle.licenseState,
      applicant.id
    );

    vehicle.vin = validateLicensePlateReq.VIN;

    const addByVinReq = await addByVinService(
      vehicle.licensePlate,
      vehicle.licenseState,
      applicant.id,
      vehicle.vin
    );

    application.vehicles = addByVinReq.id;
    vehicle.id = addByVinReq.id;

    if (userToApply === "both") {
      await applyCoapplicant(application, applicant, vehicle);
    } else {
      await applyApplicant(application, applicant, vehicle);
    }
  } catch (error) {
    console.error(error.response.data.message);
  }
};

await main();
