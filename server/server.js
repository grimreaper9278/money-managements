// Import modules
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const PORT = 5555;
require("./database/db");

const app = express();

// Handle CORS
app.use(cors());

// Body Parser
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/auth");
const walletRoutes = require("./routes/wallet");
const transactionRoutes = require("./routes/transaction");

// Register Routes
app.use("/api/auth", authRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/transaction", transactionRoutes);

// Start server Configuration
const server = app.listen(
  PORT,
  console.log(
    `we are in development mood and port is ${PORT}`
      .yellow.bold
  )
);

// Unhandled process errors
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`.red);
  server.close(() => process.exit(1));
});