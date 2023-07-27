const BaseServicePaginator = require("../../base/services/BaseServicePaginator");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BRANDS_CONFIG_MAIN_TABLE } = require("../config");

const BrandsServiceList = async (terms, page) => {
    const queryBuilder = BaseServiceQueryBuilder(BRANDS_CONFIG_MAIN_TABLE);

    if (terms) {
        queryBuilder
            .whereILike("ID_Brands", `%${terms}%`)
            .orWhereILike("brand_name", `%${terms}%`);
    }

    return {
        ...(await BaseServicePaginator(page, queryBuilder)),
        terms: terms ? terms : "",
    };
};

module.exports = BrandsServiceList;
