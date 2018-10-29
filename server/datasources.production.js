'use strict';

module.exports = {
  "db": {
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "url": process.env.DB_USER,
    "database": "rest_test",
    "password": process.env.DB_PASSWORD,
    "name": "mongoDS",
    "user": process.env.DB_USER,
    "connector": "mongodb"
  }
};
