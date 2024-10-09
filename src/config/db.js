import { Sequelize } from "sequelize";
import "dotenv/config";
import defineAssociations from "../models/associations.js";

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

async function initializeDatabase() {
  sequelize
    .authenticate()
    .then(() => {
      sequelize.sync();
      console.log(`Connected to database successfully`);
      defineAssociations();
    })
    .catch((err) => {
      console.log(`Error connecting to database ${err}`);
    });
}

export { sequelize, initializeDatabase };
