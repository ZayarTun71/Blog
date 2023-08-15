const Language = require("../../models").language;

exports.getAllLanguage = async () => {
  const language = await Language.findAll();
  return language;
};

exports.createLanguage = async (data) => {
  const language = await Language.create({ ...data });
  return language;
};
