require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db");
const Routes = require("./routes/Routes");
const url = require("./config/env");

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [url],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.static("public"));

connectDB();

app.use("/", Routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
