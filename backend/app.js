import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" });

// CORS configuration
app.use(
  cors({
    origin: "https://celebrease.vercel.app",
    methods: ["GET", "POST", "OPTIONS"], // Add OPTIONS method for preflight requests
    credentials: true,
  })
);

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route to check if the server is running
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome",
  });
});

// Message routes
app.use("/api/v1/message", messageRouter);

// Database connection
dbConnection();

export default app;
