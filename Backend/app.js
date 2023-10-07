const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes");

// const filePath = path.join(__dirname, "./assets");
// app.use("/assets", express.static(filePath));

app.use("/", routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database and server connected!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
