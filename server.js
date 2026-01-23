
 const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connectdb = require("./config/db");
connectdb();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
