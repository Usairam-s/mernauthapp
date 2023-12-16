import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log("Failed to connect to Datbase", err));

app.listen(3000, () => {
  console.log("Server is running at 3000");
});

app.use("/api/user", userRoutes);
