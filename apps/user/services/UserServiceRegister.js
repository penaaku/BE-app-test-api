var bcrypt = require("bcryptjs");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { USER_CONFIG_MAIN_TABLE } = require("../config");

const UserServiceRegister = async (email, password, nama_lengkap) => {
  const passwordHash = await bcrypt.hash(password, 10);
  await BaseServiceQueryBuilder(USER_CONFIG_MAIN_TABLE).insert({
    email,
    password: passwordHash,
    nama_lengkap,
  });

  return { email, nama_lengkap };
};

module.exports = UserServiceRegister;
