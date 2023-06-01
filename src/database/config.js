const dotenv = require('dotenv');

const _ENV = dotenv.config().parsed;

module.exports = {
  development: {
    username: _ENV['DB_USERNAME'],
    password: _ENV['DB_PASSWORD'],
    database: _ENV['DB_NAME'],
    host: _ENV['DB_HOST'],
    port: _ENV['DB_PORT'],
    dialect: _ENV['mysql'],
  },
  test: {
    username: _ENV['DB_USERNAME'],
    password: _ENV['DB_PASSWORD'],
    database: _ENV['DB_NAME'],
    host: _ENV['DB_HOST'],
    port: _ENV['DB_PORT'],
    dialect: _ENV['mysql'],
  },
  production: {
    username: _ENV['DB_USERNAME'],
    password: _ENV['DB_PASSWORD'],
    database: _ENV['DB_NAME'],
    host: _ENV['DB_HOST'],
    port: _ENV['DB_PORT'],
    dialect: _ENV['mysql'],
  },
};
