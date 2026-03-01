import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";

import connectDB from "./config/db.js";

const app = express();

const startServer = async () => {
  try {
    await connectDB();
    
    app.use(cors());
    app.use(json());

    app.get("/", (req, res) => {
      res.send("Medinexa AI Backend Running ");
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
