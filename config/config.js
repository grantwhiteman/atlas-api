require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.ATLAS_DATABASE_USER,
    "password": process.env.ATLAS_DATABASE_PASSWORD,
    "database": "atlas_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.ATLAS_DATABASE_USER,
    "password": process.env.ATLAS_DATABASE_PASSWORD,
    "database": "atlas_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
