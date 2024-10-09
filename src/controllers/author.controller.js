import AuthorService from "../services/author.services.js";
const authorService = new AuthorService();

const getAuthors = async (req, res) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const authorId = req.params.id;
    const author = await authorService.getAuthorById(authorId);
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const authorData = req.body;
    const updatedAuthor = await authorService.updateAuthor(
      authorId,
      authorData
    );
    if (updatedAuthor) {
      res.json({ message: "Author details updated successfully" });
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const deletedAuthor = await authorService.deleteAuthor(authorId);
    if (deletedAuthor) {
      res.json({ message: "Author deleted successfully" });
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAuthor = async (req, res) => {
  try {
    const authorData = req.body;
    const newAuthor = await authorService.createAuthor(authorData);
    res.status(201).json({ message: "Author created successfully", newAuthor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export { deleteAuthor, getAuthorById, getAuthors, updateAuthor, createAuthor };
