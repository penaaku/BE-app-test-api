const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const _ = require("lodash");
const { BRANDS_CONFIG_MAIN_TABLE } = require("../config");

const BrandsServiceGet = async (field, value, many = false) => {
  const results = await BaseServiceQueryBuilder(BRANDS_CONFIG_MAIN_TABLE).where(
    { [field]: value }
  );

  if (many) return results;

  return results[0];
};

module.exports = BrandsServiceGet;
