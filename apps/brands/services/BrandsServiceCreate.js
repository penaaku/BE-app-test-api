const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BRANDS_CONFIG_MAIN_TABLE } = require("../config");

const BrandsServiceCreate = async (ID_Brands, brand_foto, brand_name, create_at, update_at) => {
  const data = {
    ID_Brands,
    brand_foto,
    brand_name,
    create_at,
    update_at,
  };

  await BaseServiceQueryBuilder(BRANDS_CONFIG_MAIN_TABLE).insert(data);

  return data;
};

module.exports = BrandsServiceCreate;
