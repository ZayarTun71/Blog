const express = require("express");
const path = require("path");
const cors = require("cors");
var morgan = require("morgan");

const authRoutes = require("./auth");
const projectRoutes = require("./project");
const languageRoutes = require("./language");
const projectLanguageRoutes = require("./projectLanguage");
const blogRoutes = require("./blog");

const { checkToken } = require("../middlewares/checkToken");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));

app.use(morgan("combined"));

app.use(cors());

app.use("/api", authRoutes);
app.use("/api", checkToken, projectRoutes);
app.use("/api", checkToken, languageRoutes);
app.use("/api", checkToken, projectLanguageRoutes);
app.use("/api", checkToken, blogRoutes);

module.exports = app;
