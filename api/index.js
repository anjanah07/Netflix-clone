/* eslint-disable no-undef */
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
main().catch((err) => console.log(err));
async function main() {
  console.log("Before");
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Mongo connected"))
    .catch((err) => console.log(err));
  console.log("After");
}

app.listen(8800, () => {
  console.log("Backend server is running");
});
