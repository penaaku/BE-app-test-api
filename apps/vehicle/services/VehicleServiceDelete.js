const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_CONFIG_MAIN_TABLE } = require("../config");

const VehicleServiceDelete = async (vehicle_name) => {
    try {
        await BaseServiceQueryBuilder(VEHICLE_CONFIG_MAIN_TABLE)
            .where({ vehicle_name })
            .del();
    } catch (error) {
        console.log(error);
    } finally {
        return null;
    }
};

module.exports = VehicleServiceDelete;
