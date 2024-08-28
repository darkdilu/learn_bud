const express = require("express");
const Router = express.Router();
const { AdminSignup } = require("../controller/adminController");

Router.post("/adminsignup", AdminSignup);

module.exports = Router;
