'use strict';

module.exports = {
  "db": {
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "database": "rest_test",
    "url": process.env.MONGODB_URI,
    "password": process.env.DB_PASSWORD,
    "name": "mongoDS",
    "user": process.env.DB_USER,
    "connector": "mongodb"
  }
};
