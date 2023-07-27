const BaseServicePaginator = require("../../base/services/BaseServicePaginator");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_CONFIG_MAIN_TABLE } = require("../config");

const VehicleServiceList = async (terms, page) => {
    const queryBuilder = BaseServiceQueryBuilder(VEHICLE_CONFIG_MAIN_TABLE);

    if (terms) {
        queryBuilder
            .whereILike("vehicle_name", `%${terms}%`)
            .orWhereILike("brand", `%${terms}%`);
    }

    return {
        ...(await BaseServicePaginator(page, queryBuilder)),
        terms: terms ? terms : "",
    };
};

module.exports = VehicleServiceList;
