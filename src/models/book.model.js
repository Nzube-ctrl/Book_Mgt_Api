import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import Author from "./author.model.js";
import Genre from "./genre.model.js";

const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  authorID: {
    type: DataTypes.INTEGER,
    references: {
      model: Author,
      key: "id",
    },
  },
});

// Book.belongsTo(Author);
// Book.belongsTo(Genre);
export default Book;
