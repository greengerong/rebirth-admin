export const environment = {
  ...require('./common.json'),
  ...require('./development.json'),
  ...{
    production: false
  }
};
