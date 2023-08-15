const User = require("../../models").user;
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../utils/accessToken");
const { Op } = require("sequelize");

exports.loginUser = async (data) => {
  const { password, email } = data;

  const user = await User.findOne({
    where: { [Op.or]: [{ name: data.identifier }, { email: data.identifier }] },
  });

  if (!user) {
    throw { code: 404, message: "User not found" };
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    throw { code: 404, message: "User not found" };
  }

  const authToken = await generateAccessToken(user);

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    authToken: authToken,
  };
};
