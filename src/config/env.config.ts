export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'DEV',
  mongobd: process.env.MONGOBD,
  port: process.env.PORT || 3002,
  defaultLimit: process.env.DEFAULT_LIMIT || 7,
});
