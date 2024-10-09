import Author from "../models/author.model.js";

class AuthorService {
  async getAllAuthors() {
    try {
      const authors = await Author.findAll();
      return authors;
    } catch (error) {
      throw new Error(`Error fetching authors: ${error.message}`);
    }
  }
  async getAuthorById(id) {
    try {
      const author = await Author.findByPk(id);
      if (!author) {
        throw new Error(`Author not found with id ${id}`);
      }
      return author;
    } catch (error) {
      throw new Error(`Error fetching author: ${error.message}`);
    }
  }
  async createAuthor(data) {
    try {
      const author = await Author.create(data);
      return author;
    } catch (error) {
      throw new Error(`Error creating author: ${error.message}`);
    }
  }
  async updateAuthor(id, data) {
    try {
      const author = await Author.findByPk(id);
      if (!author) {
        throw new Error(`Author with ${id} not found`);
      }
      await author.update(data);
      return author;
    } catch (error) {
      throw new Error(`Error updating author ${error.message}`);
    }
  }
  async deleteAuthor(id) {
    try {
      const author = await Author.findByPk(id);
      if (!author) {
        throw new Error(`Author with ${id} not found`);
      }
      await author.destroy();
      return `Author with ${id} deleted successfully`;
    } catch (error) {
      throw new Error(`Error deleting author ${error.message}`);
    }
  }
}
export default AuthorService;
