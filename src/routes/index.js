const express = require("express");
const path = require("path");
const cors = require("cors");
var morgan = require("morgan");
const bodyParser = require("body-parser");
const projectRoutes = require("./project");

const app = express();
// app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", projectRoutes);

module.exports = app;
