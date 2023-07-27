const { param } = require("express-validator");
const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");

const BaseValidatorQueryPage = require("../base/validators/BaseValidatorQueryPage");
const VehicleServiceCreate = require("./services/VehicleServiceCreate");
const VehicleServiceList = require("./services/VehicleServiceList");
const VehicleServiceGet = require("./services/VehicleServiceGet");
const VehicleServiceDelete = require("./services/VehicleServiceDelete");
const VehicleValidators = require("./VehicleValidators");
const VehicleControllers = require("express").Router();

VehicleControllers.post(
  "/",
  [UserServiceTokenAuthentication, 
    VehicleValidators.vehicle_name(), 
    VehicleValidators.brand(), 
    VehicleValidators.year(), 
    VehicleValidators.price(), 
    VehicleValidators.create_at(), 
    VehicleValidators.update_at(), 
    BaseValidatorRun()],
  async (req, res) => {
    const vehicle = await VehicleServiceCreate(
      req.body.vehicle_name, 
      req.body.brand, 
      req.body.year, 
      req.body.price, 
      req.body.create_at, 
      req.body.update_at
      );
    return res.status(201).json(vehicle);
  }
);

VehicleControllers.get("/", 
[UserServiceTokenAuthentication, 
  BaseValidatorQueryPage(), 
  BaseValidatorRun()], 
  async (req, res) => {
  const daftarVehicle = await VehicleServiceList(
    req.query.terms, 
    req.query.page);

  return res.status(200).json(daftarVehicle);
});

VehicleControllers.get("/:vehicle_name", 
[UserServiceTokenAuthentication, 
    VehicleValidators.vehicle_name(param, false), 
  BaseValidatorRun()], 
  async (req, res) => {
  const vehicle = await VehicleServiceGet("vehicle_name", req.params.vehicle_name);

  return res.status(200).json(vehicle);
});


VehicleControllers.delete("/:vehicle_name",
 [UserServiceTokenAuthentication, 
  VehicleValidators.vehicle_name(param, false), 
  BaseValidatorRun()], async (req, res) => {
  const vehicle = await VehicleServiceDelete(req.params.vehicle_name);

  return res.status(204).json(vehicle);
});

module.exports = VehicleControllers;
