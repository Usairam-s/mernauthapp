import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to Database"))
  .catch(() => console.log("Failed to connect to Datbase"));

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
