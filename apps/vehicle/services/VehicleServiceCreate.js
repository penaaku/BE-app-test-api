const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_CONFIG_MAIN_TABLE } = require("../config");

const VehicleServiceCreate = async (vehicle_name, brand, year, price, create_at, update_at) => {
  const data = {
    vehicle_name,
    brand,
    year,
    price,
    create_at,
    update_at,
  };

  await BaseServiceQueryBuilder(VEHICLE_CONFIG_MAIN_TABLE).insert(data);

  return data;
};

module.exports = VehicleServiceCreate;
