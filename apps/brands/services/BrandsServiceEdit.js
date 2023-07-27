const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BRANDS_CONFIG_MAIN_TABLE } = require("../config");

const BrandsServiceEdit = async (
  ID_Brands,
  brand_foto,
  brand_name,
  create_at,
  update_at
) => {
  const data = {
    ID_Brands,
    brand_foto,
    brand_name,
    create_at,
    update_at
  };

  await BaseServiceQueryBuilder(BRANDS_CONFIG_MAIN_TABLE)
    .where({ ID_Brands })
    .update(data);

  return { ID_Brands, ...data };
};

module.exports = BrandsServiceEdit;
