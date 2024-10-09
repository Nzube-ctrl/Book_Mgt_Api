import express from "express";
import "dotenv/config";
import { initializeDatabase } from "./config/db.js";
import authorRoute from "./routes/author.route.js";

const app = express();
const PORT = process.env.PORT || 5000;
initializeDatabase();

app.use(express.json());
app.use("/author", authorRoute);

app.get("/", (req, res) => {
  res.json({ message: "Home Page" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
