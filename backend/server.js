const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const staysRouter = require("./routes/stays");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

console.log("Server starting...");

// Root route
app.get("/", (req, res) => {
  res.send("BACKEND HOME WORKING");
});

// Mount the stays router
app.use("/api/stays", staysRouter);

app.use(errorHandler);
// Start server
app.listen(5001, () => {
  console.log("Server running on port 5001");
});