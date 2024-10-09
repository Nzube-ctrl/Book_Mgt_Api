import Author from "./author.model.js";
import Book from "./book.model.js";
import Genre from "./genre.model.js";

// Book.belongsTo(Author);
// Book.belongsTo(Genre);
// Author.hasMany(Book);

const defineAssociations = () => {
  Book.belongsTo(Author, { foreignKey: "authorID" }); // Book references Author
  Book.belongsTo(Genre, { foreignKey: "genreID" }); // Assuming you have genreID in Book
  Author.hasMany(Book, { foreignKey: "authorID" }); // Author can have many Books
};
export default defineAssociations;
