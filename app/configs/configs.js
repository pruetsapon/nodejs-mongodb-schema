module.exports = () => ({
  app: {
    name: process.env.APP_NAME,
    port: process.env.APP_PORT || 5000,
    environment: process.env.APPLICATION_ENV
  },
  mongo: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME
  }
});