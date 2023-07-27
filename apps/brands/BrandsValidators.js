const { body } = require("express-validator");
const BrandsServiceGet = require("./services/BrandsServiceGet");

const BrandsValidators = {
  ID_Brands: (location = body, forCreate = true, field = "ID_Brands") => {
    return location(field)
      .notEmpty()
      .withMessage("ID_Brands wajib diisi.")
      .bail()
      .trim()
      // .custom(async (value) => {
      //   const brands = await BrandsServiceGet("ID_Brands", value);

      //   if (forCreate && value) {
      //     return Promise.reject("ID_Brands sudah digunakan.");
      //   } else if (!forCreate && !brands) {
      //     return Promise.reject("ID_Brands tidak tersedia.");
      //   }

      //   return Promise.resolve(value);
      // });
  },
  brand_foto: (location = body, field = "brand_foto") => {
    return location(field)
      .notEmpty()
      .withMessage("brand_foto wajib diisi")
      .bail()
      .trim()
      .customSanitizer((value) =>
        value.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
      );
  },
  brand_name: (location = body, field = "brand_name") => {
    return location(field)
      .notEmpty()
      .withMessage("brand_name wajib diisi")
      .bail()
      .trim()
      .customSanitizer((value) =>
        value.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
      );
  },
  create_at: (location = body, field = "create_at") => {
    return location(field)
      .notEmpty()
      .withMessage("create_at wajib diisi")
      .bail()
      .trim()
       .customSanitizer((value) =>
        value.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
      );
  },
  update_at: (location = body, field = "update_at") => {
    return location(field)
      .notEmpty()
      .withMessage("update_at wajib diisi")
      .bail()
      .trim()
      .customSanitizer((value) =>
        value.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
      );
  },
};

module.exports = BrandsValidators;
