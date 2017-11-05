export const environment = {
  ...require('./common.json'),
  ...require('./production.json'),
  ...{
    production: true
  }
};
