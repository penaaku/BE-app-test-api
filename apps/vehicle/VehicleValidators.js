const { body } = require("express-validator");
const VehicleServiceGet = require("./services/VehicleServiceGet");

const VehicleValidators = {
    vehicle_name: (location = body, forCreate = true, field = "vehicle_name") => {
    return location(field)
      .notEmpty()
      .withMessage("vehicle_name wajib diisi.")
      .bail()
      .trim()
      // .custom(async (value) => {
      //   const brands = await VehicleServiceGet("vehicle_name", value);

      //   if (forCreate && value) {
      //     return Promise.reject("vehicle_name sudah digunakan.");
      //   } else if (!forCreate && !brands) {
      //     return Promise.reject("vehicle_name tidak tersedia.");
      //   }

      //   return Promise.resolve(value);
      // });
  },
  brand: (location = body, field = "brand") => {
    return location(field)
      .notEmpty()
      .withMessage("brand wajib diisi")
      .bail()
      .trim()
      .customSanitizer((value) =>
        value.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
      );
  },
  year: (location = body, field = "year") => {
    return location(field)
      .notEmpty()
      .withMessage("year wajib diisi")
      .bail()
      .trim()
      .customSanitizer((value) =>
        value.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
      );
  },
  price: (location = body, field = "price") => {
    return location(field)
      .notEmpty()
      .withMessage("price wajib diisi")
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

module.exports = VehicleValidators;
