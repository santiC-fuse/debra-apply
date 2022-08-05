import axios from "axios";
import { paramToEnvName } from "../helpers/index.js";

export const baseUrl = paramToEnvName();

const usersUrl = `${baseUrl}/users`;
const addSsLast4nUrl = `${usersUrl}/addSsnLast4`;
const lexisNexisUrl = `${baseUrl}/lexisNexis`;
const vehicleUrl = `${baseUrl}/vehicle`;
const validateLicensePlateUrl = `${vehicleUrl}/validateLicensePlate`;
const addByVinUrl = `${vehicleUrl}/addbyvin`;
const valuationUrl = `${baseUrl}/valuation`;
const softCreditUrl = `${baseUrl}/softcredit`;
const selectedLoanUrl = `${softCreditUrl}/selectedLoan`;
const creditDecisionUrl = `${baseUrl}/creditDecision`;
const creditDecisionOffersUrl = (prequalOfferId, offerId) =>
  `${creditDecisionUrl}/prequaloffer/${prequalOfferId}/offers/${offerId}`;
const creditSelectUrl = `${creditDecisionOffersUrl}/select`;
const creditAcceptUrl = `${creditDecisionOffersUrl}/accept`;
const creditDecisionAppIdUrl = (applicationId) =>
  `${baseUrl}/creditDecision?applicationId=${applicationId}`;
const applicationUrl = `${baseUrl}/application`;
const localStorageUrl = (applicationId) =>
  `${usersUrl}/localStorage/${applicationId}`;
const applicationSsnUrl = `${baseUrl}/application/ssnNeeded`;
const addSsnUrl = `${usersUrl}/addSsn`;
const addCoapplicantSsnUrl = `${applicationUrl}/addCoapplicantSsn`;

export const usersService = async (userData) => {
  const { data } = await axios.post(usersUrl, {
    data: userData,
  });

  return data.response;
};

export const applicationService = async (applicationData) => {
  const { data } = await axios.post(applicationUrl, {
    data: applicationData,
  });

  return data.response;
};

export const localStorageService = async (applicationId, localStorageData) => {
  const { data } = await axios.post(localStorageUrl(applicationId), {
    data: localStorageData,
  });

  return data;
};

export const addSsnLast4Service = async (userId, ssnLast4) => {
  const { data } = await axios.post(addSsLast4nUrl, {
    data: {
      userId,
      ssnLast4,
    },
  });

  return data;
};

export const lexisNexisService = async (userId, phoneNumber) => {
  const { data } = await axios.post(lexisNexisUrl, {
    data: {
      userId,
      phoneNumber,
    },
  });

  return data;
};

export const validateLicensePlateService = async (
  licensePlate,
  licenseState,
  userId
) => {
  const { data } = await axios.post(validateLicensePlateUrl, {
    data: {
      licensePlate,
      licenseState,
      userId: userId,
    },
  });

  return data.finalResponse;
};

export const valuationService = async (state, mileageInput, vehicleId) => {
  const { data } = await axios.post(valuationUrl, {
    data: {
      state,
      mileageInput,
      vehicleId,
    },
  });

  return data;
};

export const addByVinService = async (
  licensePlate,
  licenseState,
  userId,
  vin
) => {
  const { data } = await axios.post(addByVinUrl, {
    data: {
      licensePlate,
      licenseState,
      userId,
      vin,
    },
  });

  return data.response;
};

export const softCreditService = async (applicationId) => {
  const { data } = await axios.post(softCreditUrl, {
    data: {
      applicationId,
    },
  });

  return data.response;
};

export const selectedLoanService = async (creditXpnAutoId) => {
  const { data } = await axios.put(selectedLoanUrl, {
    data: {
      creditXpnAutoId,
    },
  });

  return data;
};

export const creditDecisionService = async (applicationId) => {
  const { data } = await axios.post(creditDecisionUrl, {
    applicationId,
  });

  return data;
};

export const selectCreditService = async () => {
  const { data } = await axios.post(creditSelectUrl, {});

  return data;
};

export const acceptCreditService = async () => {
  const { data } = await axios.post(creditSelectUrl, {});

  return data;
};

export const ssnNeededService = async (applicationId) => {
  const { data } = await axios.post(applicationSsnUrl, {
    data: {
      applicationId,
    },
  });

  return data;
};

export const addSsnService = async (userId, applicationId, ssn) => {
  const { data } = await axios.put(addSsnUrl, {
    data: {
      userId,
      applicationId,
      ssn,
    },
  });

  return data;
};

export const addCoapplicantSsnService = async (
  userId,
  applicationId,
  coapplicantSsn
) => {
  const { data } = await axios.post(addCoapplicantSsnUrl, {
    data: {
      userId,
      applicationId,
      coapplicantSsn,
    },
  });

  return data;
};

export const createLoanService = async (applicationId) => {
  const { data } = await axios.post(createLoanService, {
    applicationId,
  });

  return data;
};

const userReq = {
  type: "POST",
  url: "http://localhost:5000/v1/api/users",
  body: {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "3019195187",
      birthdate: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      utmTerm: "",
      v: "i",
      v2: "",
      id: "",
      userProperties: {
        deviceInfo:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        locationInfo: {
          country_code: "US",
          country_name: "United States",
          city: null,
          postal: null,
          latitude: 37.751,
          longitude: -97.822,
          IPv4: "18.117.206.26",
          state: null,
        },
      },
    },
  },
};

const localStorageReq = {
  type: "PUT",
  url: "http://localhost:5000/v1/api/users/localStorage/8efcaa99-8657-4357-800a-06d0f938381f",
  body: {
    data: {
      user_id: "fe56f50d-f47c-4153-888d-554131c973ef",
      "intercom.intercom-state-v7n3fdjj":
        '{"app":{"color":"#256DF4","secondaryColor":"#256DF4","selfServeSuggestionsMatch":false,"name":"Upfront","features":{"anonymousInboundMessages":true,"googleAnalytics":true,"hubspotInstalled":false,"inboundMessages":true,"marketoEnrichmentInstalled":false,"outboundMessages":true},"launcherLogoUrl":null,"boundWebEvents":[],"inboundConversationsDisabled":false,"isInstantBootEnabled":true,"alignment":"right","horizontalPadding":20,"verticalPadding":20,"isDeveloperWorkspace":false,"customGoogleAnalyticsTrackerId":null},"launcher":{"isLauncherEnabled":true},"launcherDiscoveryMode":{"hasDiscoveredLauncher":true},"user":{"role":"visitor","locale":"en","hasConversations":false},"message":{},"conversations":{"byId":{}},"openOnBoot":{"type":null,"metadata":{}},"operator":{"lastComposerEvent":0}}',
      phone_number: "3019195187",
      application_id: "8efcaa99-8657-4357-800a-06d0f938381f",
      NewUser_id: "fe56f50d-f47c-4153-888d-554131c973ef",
      v: "i",
      vv: "",
    },
  },
};

const addSsnLast4Req = {
  type: "POST",
  url: "http://localhost:5000/v1/api/users/addSsnLast4",
  body: {
    data: {
      userId: "fe56f50d-f47c-4153-888d-554131c973ef",
      ssnLast4: "0000",
    },
  },
};

const lexisNexisReq = {
  type: "POST",
  url: "http://localhost:5000/v1/api/lexisNexis",
  body: {
    data: {
      userId: "fe56f50d-f47c-4153-888d-554131c973ef",
      phoneNumber: "3019195187",
    },
  },
};

const usersReq2 = {
  type: "POST",
  url: "http://localhost:5000/v1/api/users",
  body: {
    data: {
      firstName: "Debra",
      lastName: "Bright",
      email: "",
      phone: "3019195187",
      birthdate: "1992-11-20",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      utmTerm: "",
      v: "i",
      v2: "",
      id: "fe56f50d-f47c-4153-888d-554131c973ef",
      userProperties: {
        deviceInfo:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        locationInfo: {
          country_code: "US",
          country_name: "United States",
          city: null,
          postal: null,
          latitude: 37.751,
          longitude: -97.822,
          IPv4: "18.117.206.26",
          state: null,
        },
      },
    },
  },
};

const localStorageReq2 = {
  type: "PUT",
  url: "http://localhost:5000/v1/api/users/localStorage/8efcaa99-8657-4357-800a-06d0f938381f",
  body: {
    data: {
      user_id: "fe56f50d-f47c-4153-888d-554131c973ef",
      phone_number: "3019195187",
      googleAddress:
        '[{"long_name":"42","short_name":"42","types":["street_number"]},{"long_name":"Carter Street","short_name":"Carter St","types":["route"]},{"long_name":"Byrnedale","short_name":"Byrnedale","types":["locality","political"]},{"long_name":"Jay Township","short_name":"Jay Township","types":["administrative_area_level_3","political"]},{"long_name":"Elk County","short_name":"Elk County","types":["administrative_area_level_2","political"]},{"long_name":"Pennsylvania","short_name":"PA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"15827","short_name":"15827","types":["postal_code"]},{"long_name":"9612","short_name":"9612","types":["postal_code_suffix"]}]',
      application_id: "8efcaa99-8657-4357-800a-06d0f938381f",
      "intercom.intercom-state-v7n3fdjj":
        '{"app":{"color":"#256DF4","secondaryColor":"#256DF4","selfServeSuggestionsMatch":false,"name":"Upfront","features":{"anonymousInboundMessages":true,"googleAnalytics":true,"hubspotInstalled":false,"inboundMessages":true,"marketoEnrichmentInstalled":false,"outboundMessages":true},"launcherLogoUrl":null,"boundWebEvents":[],"inboundConversationsDisabled":false,"isInstantBootEnabled":true,"alignment":"right","horizontalPadding":20,"verticalPadding":20,"isDeveloperWorkspace":false,"customGoogleAnalyticsTrackerId":null},"launcher":{"isLauncherEnabled":true},"launcherDiscoveryMode":{"hasDiscoveredLauncher":true},"user":{"role":"visitor","locale":"en","hasConversations":false},"message":{},"conversations":{"byId":{}},"openOnBoot":{"type":null,"metadata":{}},"operator":{"lastComposerEvent":0}}',
      NewUser_id: "fe56f50d-f47c-4153-888d-554131c973ef",
      v: "i",
      vv: "",
    },
  },
};

const applicationReq = {
  type: "POST",
  url: "http://localhost:5000/v1/api/application",
  body: {
    data: {
      applicationId: "8efcaa99-8657-4357-800a-06d0f938381f",
      addressStreet: "42 Carter Street",
      addressApt: "",
      addressZipCode: "15827",
      incomeAnnual: "",
      state: "Pennsylvania",
      user: "fe56f50d-f47c-4153-888d-554131c973ef",
      vehicles: "",
      googleAddress: [
        {
          long_name: "42",
          short_name: "42",
          types: ["street_number"],
        },
        {
          long_name: "Carter Street",
          short_name: "Carter St",
          types: ["route"],
        },
        {
          long_name: "Byrnedale",
          short_name: "Byrnedale",
          types: ["locality", "political"],
        },
        {
          long_name: "Jay Township",
          short_name: "Jay Township",
          types: ["administrative_area_level_3", "political"],
        },
        {
          long_name: "Elk County",
          short_name: "Elk County",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "Pennsylvania",
          short_name: "PA",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "United States",
          short_name: "US",
          types: ["country", "political"],
        },
        {
          long_name: "15827",
          short_name: "15827",
          types: ["postal_code"],
        },
        {
          long_name: "9612",
          short_name: "9612",
          types: ["postal_code_suffix"],
        },
      ],
      addressCounty: "Jay Township",
      estimatedMileage: "",
      city: "Byrnedale",
      housingPaymentMonthly: 0,
      housingPaymentType: "",
      employmentType: "",
      email: "",
      employmentMonths: "",
      coapplicantEmail: "",
      coapplicantFirstName: "",
      coapplicantLastName: "",
      coapplicantBirthDate: "",
      coapplicantIncomeAnnual: "",
      coapplicantSSN: "",
      coapplicantHousingPaymentMonthly: 0,
      coapplicantHousingPaymentType: "",
      coapplicantEmploymentType: "",
      coapplicantEmploymentMonths: "",
    },
  },
};

const validateLicensePlateReq = {
  type: "POST",
  url: "http://localhost:5000/v1/api/vehicle/validateLicensePlate",
  body: {
    data: {
      licensePlate: "903XDP",
      licenseState: "MN",
      userId: "fe56f50d-f47c-4153-888d-554131c973ef",
    },
  },
};

const addByVinReq = {
  type: "POST",
  url: "http://localhost:5000/v1/api/vehicle/addbyvin",
  body: {
    data: {
      licensePlate: "903XDP",
      licenseState: "MN",
      userId: "fe56f50d-f47c-4153-888d-554131c973ef",
      vin: "3VWH17AU6HM529081",
    },
  },
};

const localStorageReq3 = {
  type: "PUT",
  url: "http://localhost:5000/v1/api/users/localStorage/8efcaa99-8657-4357-800a-06d0f938381f",
  body: {
    data: {
      user_id: "fe56f50d-f47c-4153-888d-554131c973ef",
      vehicle_id: "536dc7e2-1b5a-4cc5-a4ad-fe332154f58f",
      phone_number: "3019195187",
      googleAddress:
        '[{"long_name":"42","short_name":"42","types":["street_number"]},{"long_name":"Carter Street","short_name":"Carter St","types":["route"]},{"long_name":"Byrnedale","short_name":"Byrnedale","types":["locality","political"]},{"long_name":"Jay Township","short_name":"Jay Township","types":["administrative_area_level_3","political"]},{"long_name":"Elk County","short_name":"Elk County","types":["administrative_area_level_2","political"]},{"long_name":"Pennsylvania","short_name":"PA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"15827","short_name":"15827","types":["postal_code"]},{"long_name":"9612","short_name":"9612","types":["postal_code_suffix"]}]',
      application_id: "8efcaa99-8657-4357-800a-06d0f938381f",
      "intercom.intercom-state-v7n3fdjj":
        '{"app":{"color":"#256DF4","secondaryColor":"#256DF4","selfServeSuggestionsMatch":false,"name":"Upfront","features":{"anonymousInboundMessages":true,"googleAnalytics":true,"hubspotInstalled":false,"inboundMessages":true,"marketoEnrichmentInstalled":false,"outboundMessages":true},"launcherLogoUrl":null,"boundWebEvents":[],"inboundConversationsDisabled":false,"isInstantBootEnabled":true,"alignment":"right","horizontalPadding":20,"verticalPadding":20,"isDeveloperWorkspace":false,"customGoogleAnalyticsTrackerId":null},"launcher":{"isLauncherEnabled":true},"launcherDiscoveryMode":{"hasDiscoveredLauncher":true},"user":{"role":"visitor","locale":"en","hasConversations":false},"message":{},"conversations":{"byId":{}},"openOnBoot":{"type":null,"metadata":{}},"operator":{"lastComposerEvent":0}}',
      NewUser_id: "fe56f50d-f47c-4153-888d-554131c973ef",
      states:
        '[{"id":1,"code":"AL","numericCode":null,"name":"Alabama"},{"id":2,"code":"AK","numericCode":null,"name":"Alaska"},{"id":3,"code":"AZ","numericCode":null,"name":"Arizona"},{"id":4,"code":"AR","numericCode":null,"name":"Arkansas"},{"id":5,"code":"CA","numericCode":null,"name":"California"},{"id":6,"code":"CO","numericCode":null,"name":"Colorado"},{"id":7,"code":"CT","numericCode":null,"name":"Connecticut"},{"id":8,"code":"DE","numericCode":null,"name":"Delaware"},{"id":9,"code":"DC","numericCode":null,"name":"District of Columbia"},{"id":10,"code":"FL","numericCode":null,"name":"Florida"},{"id":11,"code":"GA","numericCode":null,"name":"Georgia"},{"id":12,"code":"HI","numericCode":null,"name":"Hawaii"},{"id":13,"code":"ID","numericCode":null,"name":"Idaho"},{"id":14,"code":"IL","numericCode":null,"name":"Illinois"},{"id":15,"code":"IN","numericCode":null,"name":"Indiana"},{"id":16,"code":"IA","numericCode":null,"name":"Iowa"},{"id":17,"code":"KS","numericCode":null,"name":"Kansas"},{"id":18,"code":"KY","numericCode":null,"name":"Kentucky"},{"id":19,"code":"LA","numericCode":null,"name":"Louisiana"},{"id":20,"code":"ME","numericCode":null,"name":"Maine"},{"id":21,"code":"MD","numericCode":null,"name":"Maryland"},{"id":22,"code":"MA","numericCode":null,"name":"Massachusetts"},{"id":23,"code":"MI","numericCode":null,"name":"Michigan"},{"id":24,"code":"MN","numericCode":null,"name":"Minnesota"},{"id":25,"code":"MO","numericCode":null,"name":"Mississippi"},{"id":26,"code":"MS","numericCode":null,"name":"Missouri"},{"id":27,"code":"MT","numericCode":null,"name":"Montana"},{"id":28,"code":"NE","numericCode":null,"name":"Nebraska"},{"id":29,"code":"NV","numericCode":null,"name":"Nevada"},{"id":30,"code":"NH","numericCode":null,"name":"New Hampshire"},{"id":31,"code":"NJ","numericCode":null,"name":"New Jersey"},{"id":32,"code":"NM","numericCode":null,"name":"New Mexico"},{"id":33,"code":"NY","numericCode":null,"name":"New York"},{"id":34,"code":"NC","numericCode":null,"name":"North Carolina"},{"id":35,"code":"ND","numericCode":null,"name":"North Dakota"},{"id":36,"code":"OH","numericCode":null,"name":"Ohio"},{"id":37,"code":"OK","numericCode":null,"name":"Oklahoma"},{"id":38,"code":"OR","numericCode":null,"name":"Oregon"},{"id":39,"code":"PA","numericCode":null,"name":"Pennsylvania"},{"id":40,"code":"RI","numericCode":null,"name":"Rhode Island"},{"id":41,"code":"SC","numericCode":null,"name":"South Carolina"},{"id":42,"code":"SD","numericCode":null,"name":"South Dakota"},{"id":43,"code":"TN","numericCode":null,"name":"Tennessee"},{"id":44,"code":"TX","numericCode":null,"name":"Texas"},{"id":45,"code":"UT","numericCode":null,"name":"Utah"},{"id":46,"code":"VT","numericCode":null,"name":"Vermont"},{"id":47,"code":"VA","numericCode":null,"name":"Virginia"},{"id":48,"code":"WA","numericCode":null,"name":"Washington"},{"id":49,"code":"WV","numericCode":null,"name":"West Virginia"},{"id":50,"code":"WI","numericCode":null,"name":"Wisconsin"},{"id":51,"code":"WY","numericCode":null,"name":"Wyoming"}]',
      v: "i",
      vv: "",
    },
  },
};

const usersReq3 = {
  type: "POST",
  url: "http://localhost:5000/v1/api/users",
  body: {
    data: {
      firstName: "Debra",
      lastName: "Bright",
      email: "test@debra.com",
      phone: "3019195187",
      birthdate: "1992-11-20",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      utmTerm: "",
      v: "i",
      v2: "",
      id: "fe56f50d-f47c-4153-888d-554131c973ef",
    },
  },
};

const localStorageReq4 = {
  type: "PUT",
  url: "http://localhost:5000/v1/api/users/localStorage/8efcaa99-8657-4357-800a-06d0f938381f",
  body: {
    data: {
      user_id: "fe56f50d-f47c-4153-888d-554131c973ef",
      vehicle_id: "536dc7e2-1b5a-4cc5-a4ad-fe332154f58f",
      phone_number: "3019195187",
      googleAddress:
        '[{"long_name":"42","short_name":"42","types":["street_number"]},{"long_name":"Carter Street","short_name":"Carter St","types":["route"]},{"long_name":"Byrnedale","short_name":"Byrnedale","types":["locality","political"]},{"long_name":"Jay Township","short_name":"Jay Township","types":["administrative_area_level_3","political"]},{"long_name":"Elk County","short_name":"Elk County","types":["administrative_area_level_2","political"]},{"long_name":"Pennsylvania","short_name":"PA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"15827","short_name":"15827","types":["postal_code"]},{"long_name":"9612","short_name":"9612","types":["postal_code_suffix"]}]',
      application_id: "8efcaa99-8657-4357-800a-06d0f938381f",
      stateUser: "PA",
      "intercom.intercom-state-v7n3fdjj":
        '{"app":{"color":"#256DF4","secondaryColor":"#256DF4","selfServeSuggestionsMatch":false,"name":"Upfront","features":{"anonymousInboundMessages":true,"googleAnalytics":true,"hubspotInstalled":false,"inboundMessages":true,"marketoEnrichmentInstalled":false,"outboundMessages":true},"launcherLogoUrl":null,"boundWebEvents":[],"inboundConversationsDisabled":false,"isInstantBootEnabled":true,"alignment":"right","horizontalPadding":20,"verticalPadding":20,"isDeveloperWorkspace":false,"customGoogleAnalyticsTrackerId":null},"launcher":{"isLauncherEnabled":true},"launcherDiscoveryMode":{"hasDiscoveredLauncher":true},"user":{"role":"visitor","locale":"en","hasConversations":false},"message":{},"conversations":{"byId":{}},"openOnBoot":{"type":null,"metadata":{}},"operator":{"lastComposerEvent":0}}',
      NewUser_id: "fe56f50d-f47c-4153-888d-554131c973ef",
      states:
        '[{"id":1,"code":"AL","numericCode":null,"name":"Alabama"},{"id":2,"code":"AK","numericCode":null,"name":"Alaska"},{"id":3,"code":"AZ","numericCode":null,"name":"Arizona"},{"id":4,"code":"AR","numericCode":null,"name":"Arkansas"},{"id":5,"code":"CA","numericCode":null,"name":"California"},{"id":6,"code":"CO","numericCode":null,"name":"Colorado"},{"id":7,"code":"CT","numericCode":null,"name":"Connecticut"},{"id":8,"code":"DE","numericCode":null,"name":"Delaware"},{"id":9,"code":"DC","numericCode":null,"name":"District of Columbia"},{"id":10,"code":"FL","numericCode":null,"name":"Florida"},{"id":11,"code":"GA","numericCode":null,"name":"Georgia"},{"id":12,"code":"HI","numericCode":null,"name":"Hawaii"},{"id":13,"code":"ID","numericCode":null,"name":"Idaho"},{"id":14,"code":"IL","numericCode":null,"name":"Illinois"},{"id":15,"code":"IN","numericCode":null,"name":"Indiana"},{"id":16,"code":"IA","numericCode":null,"name":"Iowa"},{"id":17,"code":"KS","numericCode":null,"name":"Kansas"},{"id":18,"code":"KY","numericCode":null,"name":"Kentucky"},{"id":19,"code":"LA","numericCode":null,"name":"Louisiana"},{"id":20,"code":"ME","numericCode":null,"name":"Maine"},{"id":21,"code":"MD","numericCode":null,"name":"Maryland"},{"id":22,"code":"MA","numericCode":null,"name":"Massachusetts"},{"id":23,"code":"MI","numericCode":null,"name":"Michigan"},{"id":24,"code":"MN","numericCode":null,"name":"Minnesota"},{"id":25,"code":"MO","numericCode":null,"name":"Mississippi"},{"id":26,"code":"MS","numericCode":null,"name":"Missouri"},{"id":27,"code":"MT","numericCode":null,"name":"Montana"},{"id":28,"code":"NE","numericCode":null,"name":"Nebraska"},{"id":29,"code":"NV","numericCode":null,"name":"Nevada"},{"id":30,"code":"NH","numericCode":null,"name":"New Hampshire"},{"id":31,"code":"NJ","numericCode":null,"name":"New Jersey"},{"id":32,"code":"NM","numericCode":null,"name":"New Mexico"},{"id":33,"code":"NY","numericCode":null,"name":"New York"},{"id":34,"code":"NC","numericCode":null,"name":"North Carolina"},{"id":35,"code":"ND","numericCode":null,"name":"North Dakota"},{"id":36,"code":"OH","numericCode":null,"name":"Ohio"},{"id":37,"code":"OK","numericCode":null,"name":"Oklahoma"},{"id":38,"code":"OR","numericCode":null,"name":"Oregon"},{"id":39,"code":"PA","numericCode":null,"name":"Pennsylvania"},{"id":40,"code":"RI","numericCode":null,"name":"Rhode Island"},{"id":41,"code":"SC","numericCode":null,"name":"South Carolina"},{"id":42,"code":"SD","numericCode":null,"name":"South Dakota"},{"id":43,"code":"TN","numericCode":null,"name":"Tennessee"},{"id":44,"code":"TX","numericCode":null,"name":"Texas"},{"id":45,"code":"UT","numericCode":null,"name":"Utah"},{"id":46,"code":"VT","numericCode":null,"name":"Vermont"},{"id":47,"code":"VA","numericCode":null,"name":"Virginia"},{"id":48,"code":"WA","numericCode":null,"name":"Washington"},{"id":49,"code":"WV","numericCode":null,"name":"West Virginia"},{"id":50,"code":"WI","numericCode":null,"name":"Wisconsin"},{"id":51,"code":"WY","numericCode":null,"name":"Wyoming"}]',
      v: "i",
      vv: "",
    },
  },
};

const applicationReq2 = {
  type: "POST",
  url: "http://localhost:5000/v1/api/application",
  body: {
    data: {
      applicationId: "8efcaa99-8657-4357-800a-06d0f938381f",
      addressStreet: "42 Carter Street",
      addressApt: "",
      addressZipCode: "15827",
      incomeAnnual: 1350447,
      state: "Pennsylvania",
      user: "fe56f50d-f47c-4153-888d-554131c973ef",
      vehicles: "536dc7e2-1b5a-4cc5-a4ad-fe332154f58f",
      googleAddress: [
        {
          long_name: "42",
          short_name: "42",
          types: ["street_number"],
        },
        {
          long_name: "Carter Street",
          short_name: "Carter St",
          types: ["route"],
        },
        {
          long_name: "Byrnedale",
          short_name: "Byrnedale",
          types: ["locality", "political"],
        },
        {
          long_name: "Jay Township",
          short_name: "Jay Township",
          types: ["administrative_area_level_3", "political"],
        },
        {
          long_name: "Elk County",
          short_name: "Elk County",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "Pennsylvania",
          short_name: "PA",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "United States",
          short_name: "US",
          types: ["country", "political"],
        },
        {
          long_name: "15827",
          short_name: "15827",
          types: ["postal_code"],
        },
        {
          long_name: "9612",
          short_name: "9612",
          types: ["postal_code_suffix"],
        },
      ],
      addressCounty: "Jay Township",
      termsConditions: true,
      city: "Byrnedale",
      housingPaymentMonthly: 1400,
      housingPaymentType: "Rent",
      employmentType: "Employed",
      employmentMonths: 13,
      estimatedMileage: 49012,
    },
  },
};

const valuationReq = {
  type: "POST",
  url: "http://localhost:5000/v1/api/valuation",
  body: {
    data: {
      state: "PA",
      mileageInput: 49012,
      vehicleId: "536dc7e2-1b5a-4cc5-a4ad-fe332154f58f",
    },
  },
};

const softCreditReq = {
  post: "POST",
  url: "http://localhost:5000/v1/api/softcredit",
  body: {
    data: {
      applicationId: "8efcaa99-8657-4357-800a-06d0f938381f",
    },
  },
};

const localStorageReq5 = {
  type: "PUT",
  url: "http://localhost:5000/v1/api/users/localStorage/8efcaa99-8657-4357-800a-06d0f938381f",
  body: {
    data: {
      user_id: "fe56f50d-f47c-4153-888d-554131c973ef",
      width: "781",
      vehicle_id: "536dc7e2-1b5a-4cc5-a4ad-fe332154f58f",
      phone_number: "3019195187",
      googleAddress:
        '[{"long_name":"42","short_name":"42","types":["street_number"]},{"long_name":"Carter Street","short_name":"Carter St","types":["route"]},{"long_name":"Byrnedale","short_name":"Byrnedale","types":["locality","political"]},{"long_name":"Jay Township","short_name":"Jay Township","types":["administrative_area_level_3","political"]},{"long_name":"Elk County","short_name":"Elk County","types":["administrative_area_level_2","political"]},{"long_name":"Pennsylvania","short_name":"PA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"15827","short_name":"15827","types":["postal_code"]},{"long_name":"9612","short_name":"9612","types":["postal_code_suffix"]}]',
      application_id: "8efcaa99-8657-4357-800a-06d0f938381f",
      stateUser: "PA",
      creditNearPrime: "true",
      creditPrime: "true",
      creditXpn:
        '[{"selectedLoan":false,"creditorName":"ELOAN/SST","typeOfLoan":"Auto Loan","dateOpened":"2022-03-20T03:00:00.000Z","lastUpdatedAt":"2022-05-28T03:00:00.000Z","balanceOriginal":17000,"balanceRemaining":16533,"monthsOriginal":60,"monthsRemaining":57,"derogCounter":0,"monthsRemainingEstimated":56,"morep":3,"paymentMonthly":340,"paymentRemaining":19380,"aprEstimated":"7.40","isOpen":true,"isCurrent":true,"statusCode":"11","statusDescription":"This is an account in good standing","ownershipCode":"1","ownershipDescription":"Individual","deletedAt":null,"id":"b57aedcf-5f63-414e-a88a-2960d8ea2dd2","createdAt":"2022-08-02T13:28:08.857Z","updatedAt":"2022-08-02T13:28:08.857Z","dateOpenedString":"March 2022"},{"selectedLoan":false,"creditorName":"SAAB FINANCIAL","typeOfLoan":"Lease","dateOpened":"2018-04-24T03:00:00.000Z","lastUpdatedAt":"2022-03-28T03:00:00.000Z","balanceOriginal":20201,"balanceRemaining":0,"monthsOriginal":48,"monthsRemaining":1,"derogCounter":0,"monthsRemainingEstimated":0,"morep":47,"paymentMonthly":0,"paymentRemaining":0,"aprEstimated":0,"isOpen":true,"isCurrent":true,"statusCode":"11","statusDescription":"This is an account in good standing","ownershipCode":"1","ownershipDescription":"Individual","deletedAt":null,"id":"bf07b656-5f42-4cf9-a615-066c55d7b39f","createdAt":"2022-08-02T13:28:08.867Z","updatedAt":"2022-08-02T13:28:08.867Z","dateOpenedString":"April 2018"}]',
      "intercom.intercom-state-v7n3fdjj":
        '{"app":{"color":"#256DF4","secondaryColor":"#256DF4","selfServeSuggestionsMatch":false,"name":"Upfront","features":{"anonymousInboundMessages":true,"googleAnalytics":true,"hubspotInstalled":false,"inboundMessages":true,"marketoEnrichmentInstalled":false,"outboundMessages":true},"launcherLogoUrl":null,"boundWebEvents":[],"inboundConversationsDisabled":false,"isInstantBootEnabled":true,"alignment":"right","horizontalPadding":20,"verticalPadding":20,"isDeveloperWorkspace":false,"customGoogleAnalyticsTrackerId":null},"launcher":{"isLauncherEnabled":true},"launcherDiscoveryMode":{"hasDiscoveredLauncher":true},"user":{"role":"visitor","locale":"en","hasConversations":false},"message":{},"conversations":{"byId":{}},"openOnBoot":{"type":null,"metadata":{}},"operator":{"lastComposerEvent":0}}',
      NewUser_id: "fe56f50d-f47c-4153-888d-554131c973ef",
      states:
        '[{"id":1,"code":"AL","numericCode":null,"name":"Alabama"},{"id":2,"code":"AK","numericCode":null,"name":"Alaska"},{"id":3,"code":"AZ","numericCode":null,"name":"Arizona"},{"id":4,"code":"AR","numericCode":null,"name":"Arkansas"},{"id":5,"code":"CA","numericCode":null,"name":"California"},{"id":6,"code":"CO","numericCode":null,"name":"Colorado"},{"id":7,"code":"CT","numericCode":null,"name":"Connecticut"},{"id":8,"code":"DE","numericCode":null,"name":"Delaware"},{"id":9,"code":"DC","numericCode":null,"name":"District of Columbia"},{"id":10,"code":"FL","numericCode":null,"name":"Florida"},{"id":11,"code":"GA","numericCode":null,"name":"Georgia"},{"id":12,"code":"HI","numericCode":null,"name":"Hawaii"},{"id":13,"code":"ID","numericCode":null,"name":"Idaho"},{"id":14,"code":"IL","numericCode":null,"name":"Illinois"},{"id":15,"code":"IN","numericCode":null,"name":"Indiana"},{"id":16,"code":"IA","numericCode":null,"name":"Iowa"},{"id":17,"code":"KS","numericCode":null,"name":"Kansas"},{"id":18,"code":"KY","numericCode":null,"name":"Kentucky"},{"id":19,"code":"LA","numericCode":null,"name":"Louisiana"},{"id":20,"code":"ME","numericCode":null,"name":"Maine"},{"id":21,"code":"MD","numericCode":null,"name":"Maryland"},{"id":22,"code":"MA","numericCode":null,"name":"Massachusetts"},{"id":23,"code":"MI","numericCode":null,"name":"Michigan"},{"id":24,"code":"MN","numericCode":null,"name":"Minnesota"},{"id":25,"code":"MO","numericCode":null,"name":"Mississippi"},{"id":26,"code":"MS","numericCode":null,"name":"Missouri"},{"id":27,"code":"MT","numericCode":null,"name":"Montana"},{"id":28,"code":"NE","numericCode":null,"name":"Nebraska"},{"id":29,"code":"NV","numericCode":null,"name":"Nevada"},{"id":30,"code":"NH","numericCode":null,"name":"New Hampshire"},{"id":31,"code":"NJ","numericCode":null,"name":"New Jersey"},{"id":32,"code":"NM","numericCode":null,"name":"New Mexico"},{"id":33,"code":"NY","numericCode":null,"name":"New York"},{"id":34,"code":"NC","numericCode":null,"name":"North Carolina"},{"id":35,"code":"ND","numericCode":null,"name":"North Dakota"},{"id":36,"code":"OH","numericCode":null,"name":"Ohio"},{"id":37,"code":"OK","numericCode":null,"name":"Oklahoma"},{"id":38,"code":"OR","numericCode":null,"name":"Oregon"},{"id":39,"code":"PA","numericCode":null,"name":"Pennsylvania"},{"id":40,"code":"RI","numericCode":null,"name":"Rhode Island"},{"id":41,"code":"SC","numericCode":null,"name":"South Carolina"},{"id":42,"code":"SD","numericCode":null,"name":"South Dakota"},{"id":43,"code":"TN","numericCode":null,"name":"Tennessee"},{"id":44,"code":"TX","numericCode":null,"name":"Texas"},{"id":45,"code":"UT","numericCode":null,"name":"Utah"},{"id":46,"code":"VT","numericCode":null,"name":"Vermont"},{"id":47,"code":"VA","numericCode":null,"name":"Virginia"},{"id":48,"code":"WA","numericCode":null,"name":"Washington"},{"id":49,"code":"WV","numericCode":null,"name":"West Virginia"},{"id":50,"code":"WI","numericCode":null,"name":"Wisconsin"},{"id":51,"code":"WY","numericCode":null,"name":"Wyoming"}]',
      v: "i",
      vv: "",
    },
  },
};

const selectedLoanReq = {
  type: "PUT",
  url: "http://localhost:5000/v1/api/softcredit/selectedLoan",
  body: {
    data: {
      creditXpnAutoId: "b57aedcf-5f63-414e-a88a-2960d8ea2dd2",
    },
  },
};

const creditDecisionReq = {
  type: "POST",
  url: "http://localhost:5000/v1/api/creditDecision",
  body: {
    applicationId: "8efcaa99-8657-4357-800a-06d0f938381f",
  },
};
