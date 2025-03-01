const developmentConfig = {
  BASE_URL: "http://localhost:3000",
  apiGateway: {
    BASE_URL: "https://academicspro-production.up.railway.app/api/v1",
  },
};

const productionConfig = {
  BASE_URL: "http://localhost:3000",
  apiGateway: {
    BASE_URL: "https://academicspro-production.up.railway.app/api/v1",
  },
};

const uatConfig = {
  BASE_URL: "http://localhost:3000",
  apiGateway: {
    BASE_URL: "https://academicspro-production.up.railway.app/api/v1",
  },
};

const prod = "production";
const uat = "uat";
const dev = "dev";

const baseConfig =
  process.env.REACT_APP_STAGE === prod
    ? productionConfig
    : process.env.REACT_APP_STAGE === uat
    ? uatConfig
    : developmentConfig;

const AppConfig = {
  APP_NAME: "ACADEMICS PRO",
  APP_STAGE: process.env.REACT_APP_STAGE || prod,
  IS_DEV_ENV: process.env.REACT_APP_STAGE === dev ? true : false,
  IS_UAT_ENV: process.env.REACT_APP_STAGE === uat ? true : false,
  IS_PROD_ENV: process.env.REACT_APP_STAGE === prod ? true : false,
  LOCAL_STORAGE_ACCESS_TOKEN_KEY: "proAccessToken",
  LOCAL_STORAGE_REFRESH_TOKEN_KEY: "proRefreshToken",
  LOCALSTORAGE_APP_CONFIG: "CASINO-APP-CONFIG",
  ...baseConfig,
};

export default AppConfig;
