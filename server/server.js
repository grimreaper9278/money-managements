// Import modules
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("colors");
require("dotenv").config({ path: __dirname + "/.env" });

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

// Implement req logger for development mood
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Register Routes
app.use("/api/auth", authRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/transaction", transactionRoutes);

// Start server Configuration
const PORT = process.env.PORT || 5555;
const server = app.listen(
  PORT,
  console.log(
    `we are in ${process.env.NODE_ENV} mood and port is ${process.env.PORT}`
      .yellow.bold
  )
);

// Unhandled process errors
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`.red);
  server.close(() => process.exit(1));
});
