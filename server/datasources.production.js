'use strict';

module.exports = {
  "db": {
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "database": "rest_test",
    "password": process.env.DB_PASSWORD,
    "name": "mongoDS",
    "user": process.env.DB_USER,
    "connector": "mongodb"
  }
};
