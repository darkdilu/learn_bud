const express = require("express");
const Router = express.Router();
const { requests } = require("../controllers/reportController");
const { cookieValidation } = require("../controllers/userControllers");

Router.get("/users", cookieValidation, requests);

module.exports = Router;
