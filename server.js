import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connection.js";

dotenv.config();
const app = express();

connectDB();
app.get("/", (req, res) => {
  res.send("Working");
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server Runnning on port ${PORT}`));
