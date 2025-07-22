import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((err) => console.error(err));

import todoRoutes from "./routes/todoRoutes";
app.use("/api/todos", todoRoutes);
