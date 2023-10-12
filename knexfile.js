const path = require("path");
require("dotenv").config();
//requires and loads dotenv into the application code. Dotenv loads the environment variables that you defined in .env (which currently only contains DATABASE_URL) into process.env.
const { DATABASE_URL } = process.env;
//stores the value of process.env.DATABASE_URL in a variable called DATABASE_URL
module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    //sets the location of the database for the development environment to DATABASE_URL (which is currently the URL for your ElephantSQL database instance).
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    //Setting directory: path.join(__dirname, "src", "db", "migrations") within the migrations object will tell Knex to store migration files in the migrations folder at src/db/migrations.
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
