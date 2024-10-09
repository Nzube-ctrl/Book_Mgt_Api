import {
  deleteAuthor,
  updateAuthor,
  createAuthor,
  getAuthorById,
  getAuthors,
} from "../controllers/author.controller.js";
import express from "express";

const authorRoute = express.Router();

authorRoute.get("/", getAuthors);
authorRoute.get("/:id", getAuthorById);
authorRoute.post("/", createAuthor);
authorRoute.put("/:id", updateAuthor);
authorRoute.delete("/:id", deleteAuthor);

export default authorRoute;
