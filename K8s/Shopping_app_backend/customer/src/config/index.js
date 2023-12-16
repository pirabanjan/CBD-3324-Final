const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

  // DB_URL: process.env.MONGODB_URI,
  // APP_SECRET: process.env.APP_SECRET,
  // EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  // MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,

module.exports = {
  PORT: process.env.PORT,
  DB_URL: 'mongodb://nosql-db-service/msytt_customer',
  APP_SECRET: 'jg_youtube_tutorial',
  EXCHANGE_NAME: 'ONLINE_STORE',
  MSG_QUEUE_URL: 'amqp://guest:guest@rabbitmq-service:5672',
  PORT: 8001,
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
};
