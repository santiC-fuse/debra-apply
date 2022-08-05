export const availableEnvs = {
  local: "http://localhost:5000/v1/api",
  qa1: "https://qa1-api.saveupfront.co/v1/api",
  qa2: "https://qa2-api.saveupfront.co/v1/api",
  qa3: "https://qa3-api.saveupfront.co/v1/api",
  qa4: "https://qa4-api.saveupfront.co/v1/api",
};

export const mvps = {
  MVP_I: "i",
  MVP_M: "m",
};

export const debraData = {
  firstName: "Debra",
  lastName: "Bright",
  phone: "9592059222",
  ssnLast4: "0932",
  ssnComplete: "666400932",
  addressCity: "Byrnedale",
  addressStreet: "42 Carter Street",
  addressStreetNumber: "42",
  addressStreetName: "Carter",
  addressStreetType: "Street",
  addressZipCode: "15827",
  state: "Pennsylvania",
  addressCounty: "Jay Township",
  email: "automated-test-debra@saveupfront.co",
  birthdate: new Date("1978-02-14 00:00:00"),
  v: "i",
  id: "",
};

export const johnData = {
  firstName: "John",
  lastName: "Williams",
  phone: "9592059222",
  ssnLast4: "0000",
  ssnComplete: "666239028",
  addressCity: "Shalimar",
  addressStreet: "8 Marlborough Road",
  addressStreetNumber: "8",
  addressStreetName: "Marlborough",
  addressStreetType: "Road",
  addressZipCode: "32579",
  state: "Florida",
  addressCounty: "Okaloosa",
  email: "automated-test-john@saveupfront.co",
  birthdate: new Date("1978-02-14 00:00:00"),
  v: "i",
  id: "",
};

export const availableUsers = {
  debra: debraData,
  jhon: johnData,
  both: debraData,
};

export const applicationData = {
  applicationId: "",
  addressStreet: "",
  addressApt: "",
  addressZipCode: "",
  state: "",
  addressCounty: "",
  addressCity: "",
  addressStreetNumber: "",
  addressStreetName: "",
  addressStreetType: "",
  incomeAnnual: 1350000,
  termsConditions: true,
  housingPaymentMonthly: 1400,
  housingPaymentType: "Rent",
  employmentType: "Employed",
  employmentMonths: 13,
  estimatedMileage: 49012,
  user: "",
  vehicles: "",
};

export const vehicleData = {
  vehicle_year: "2020",
  vehicle_make: "Toyota",
  vehicle_model: "Camry",
  vehicle_trim: "Sedan 4D L 2.5L I4",
  licensePlate: "903XDP",
  licenseState: "MN",
  mileage: 49012,
  id: "",
};

export const additionalInfo = {
  yearly_income: "75000",
  employment_status: "Employed",
  job_duration_years: "5",
  job_duration_months: "5",
  monthly_payment: "800",
  rent_or_own: "Own",
  estimated_mileage: "10000",
};
