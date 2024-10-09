import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import Book from "./book.model.js";

const Author = sequelize.define("Author", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

// Author.hasMany(Book);
export default Author;
