import { availableEnvs, availableUsers, johnData } from "../constants/index.js";
import {
  addCoapplicantSsnService,
  addSsnService,
  softCreditService,
} from "../services/apply.js";

export const getUserToApply = (userToApply) => {
  let userName;
  for (const user in availableUsers) {
    if (user === userToApply) userName = availableUsers[user];
  }
  if (!userName) throw Error("Invalid user name");
  return userName;
};

export const paramToEnvName = () => {
  const param = process.argv[2];
  let envName;
  for (const env in availableEnvs) {
    if (env === param) envName = availableEnvs[env];
  }
  if (!envName) throw Error("Invalid environment name");
  return envName;
};

export const validateAndUsePhoneNumber = (phoneNumber) => {
  const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  const isValid = phoneNumberPattern.test(phoneNumber);
  if (!isValid) throw Error("Invalid phone number");
  return phoneNumber;
};

export const addUserToApplication = (userData, applicationData) => {
  const application = applicationData;
  application.user = userData.id;
  application.addressStreet = userData.addressStreet;
  application.addressZipCode = userData.addressZipCode;
  application.state = userData.state;
  application.addressCounty = userData.addressCounty;
  application.addressCity = userData.addressCity;
  application.addressStreetNumber = userData.addressStreetNumber;
  application.addressStreetName = userData.addressStreetName;
  application.addressStreetType = userData.addressStreetType;
  return application;
};

export const addCoapplicantToApplication = (applicationData) => {
  const application = applicationData;
  application.coapplicantEmail = johnData.email;
  application.coapplicantFirstName = johnData.firstName;
  application.coapplicantLastName = johnData.lastName;
  application.coapplicantBirthDate = johnData.birthdate;
  application.coapplicantSSN = johnData.ssnComplete;
  application.coapplicantIncomeAnnual = 1350000;
  application.coapplicantHousingPaymentMonthly = 1400;
  application.coapplicantHousingPaymentType = "Rent";
  application.coapplicantEmploymentType = "Employed";
  application.coapplicantEmploymentMonths = 13;
  return application;
};

export const handleSoftCreditNextPage = async (
  nextPage,
  applicant,
  application,
  coapplicant
) => {
  switch (nextPage) {
    case "credit_check":
      await addSsnService(applicant.id, application.id, applicant.ssnComplete);
      return await softCreditService(application.id);
    case "credit_check_2":
      await addCoapplicantSsnService(
        applicant.id,
        application.id,
        coapplicant.ssnComplete
      );
      return await softCreditService(application.id);
    default:
      break;
  }
};
