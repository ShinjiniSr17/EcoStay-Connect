console.log("🚀 THIS SERVER IS RUNNING");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const errorHandler = require("./middleware/errorHandler");
const staysRouter = require("./routes/stays");

const app = express();

// -------------------------
// Connect to MongoDB
// -------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed");
    console.error(err);
  });

// -------------------------
// Middlewares
// -------------------------
app.use(cors());
app.use(express.json());

console.log("Server starting...");

// -------------------------
// Routes
// -------------------------
app.get("/", (req, res) => {
  res.send("BACKEND HOME WORKING");
});

app.use("/api/stays", staysRouter);

// -------------------------
// Error Handler
// -------------------------
app.use(errorHandler);

// -------------------------
// Start Server
// -------------------------
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});