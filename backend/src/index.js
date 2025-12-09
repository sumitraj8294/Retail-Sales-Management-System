require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const salesRoutes = require("./routes/SalesRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err.message));

// Routes
app.use("/api/sales", salesRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
