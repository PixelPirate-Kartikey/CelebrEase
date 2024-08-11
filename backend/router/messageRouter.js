import express from "express";
import { sendMessage } from "../controller/messageController.js";

const router = express.Router();

// Handle POST request to send a message
router.post("/send", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://celebrease.vercel.app");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Call the sendMessage controller to process the request
  sendMessage(req, res);
});

// Handle OPTIONS preflight request
router.options("/send", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://celebrease.vercel.app");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.sendStatus(200); // Respond with 200 OK for preflight request
});

export default router;
