"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class project_language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      project_language.belongsTo(models.project, {
        foreignKey: "project_id",
        as:'projects'
      });
      project_language.belongsTo(models.language, {
        foreignKey: "language_id",
        as:'languages'
      });
    }
  }
  project_language.init(
    {
      project_id: DataTypes.INTEGER,
      language_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "project_language",
    }
  );
  return project_language;
};
