// Import modules
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
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

// Register Routes
app.use("/api/auth", authRoutes);

// Implement req logger for development mood
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

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