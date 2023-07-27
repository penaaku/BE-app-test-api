const { param } = require("express-validator");
const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");

const BaseValidatorQueryPage = require("../base/validators/BaseValidatorQueryPage");
const BrandsValidators = require("./BrandsValidators");
const BrandsServiceCreate = require("./services/BrandsServiceCreate");
const BrandsServiceList = require("./services/BrandsServiceList");
const BrandsServiceGet = require("./services/BrandsServiceGet");
const BrandsServiceEdit = require("./services/BrandsServiceEdit");
const BrandsServiceDelete = require("./services/BrandsServiceDelete");
const BrandsControllers = require("express").Router();

BrandsControllers.post(
  "/",
  [UserServiceTokenAuthentication, 
    BrandsValidators.ID_Brands(), 
    BrandsValidators.brand_foto(), 
    BrandsValidators.brand_name(), 
    BrandsValidators.create_at(), 
    BrandsValidators.update_at(), 
    BaseValidatorRun()],
  async (req, res) => {
    const brands = await BrandsServiceCreate(
      req.body.ID_Brands, 
      req.body.brand_foto, 
      req.body.brand_name, 
      req.body.create_at, 
      req.body.update_at
      );
    return res.status(201).json(brands);
  }
);

BrandsControllers.get("/", 
[UserServiceTokenAuthentication, 
  BaseValidatorQueryPage(), 
  BaseValidatorRun()], 
  async (req, res) => {
  const daftarBrands = await BrandsServiceList(
    req.query.terms, 
    req.query.page);

  return res.status(200).json(daftarBrands);
});

BrandsControllers.get("/:ID_Brands", 
[UserServiceTokenAuthentication, 
  BrandsValidators.ID_Brands(param, false), 
  BaseValidatorRun()], 
  async (req, res) => {
  const brands = await BrandsServiceGet("ID_Brands", req.params.ID_Brands);

  return res.status(200).json(brands);
});

BrandsControllers.put("/:ID_Brands", 
[UserServiceTokenAuthentication, 
  BrandsValidators.ID_Brands(param, false), 
  BrandsValidators.brand_name(), BaseValidatorRun()], 
  async (req, res) => {
  const brands = await BrandsServiceEdit(
    req.params.ID_Brands, 
    req.body.brand_foto, 
    req.body.brand_name, 
    req.body.create_at, 
    req.body.update_at);
  return res.status(200).json(brands);
});

BrandsControllers.delete("/:ID_Brands",
 [UserServiceTokenAuthentication, 
  BrandsValidators.ID_Brands(param, false), 
  BaseValidatorRun()], async (req, res) => {
  const brands = await BrandsServiceDelete(req.params.ID_Brands);

  return res.status(204).json(brands);
});

module.exports = BrandsControllers;
