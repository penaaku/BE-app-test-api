const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", require("./apps/user/UserControllers"));
app.use("/hello", require("./apps/user/UserControllers"));
app.use("/vehicle", require("./apps/vehicle/VehicleControllers"));
app.use("/brands", require("./apps/brands/BrandsControllers"));

module.exports = app;
