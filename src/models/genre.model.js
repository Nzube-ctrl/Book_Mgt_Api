import { sequelize } from "../config/db.js";
import {  DataTypes } from "sequelize";

const Genre = sequelize.define("Genre", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});
export default Genre;
