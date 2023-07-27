const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BRANDS_CONFIG_MAIN_TABLE } = require("../config");

const BrandsServiceDelete = async (ID_Brands) => {
    try {
        await BaseServiceQueryBuilder(BRANDS_CONFIG_MAIN_TABLE)
            .where({ ID_Brands })
            .del();
    } catch (error) {
        console.log(error);
    } finally {
        return null;
    }
};

module.exports = BrandsServiceDelete;
