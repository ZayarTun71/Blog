"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      project.belongsToMany(models.language, {
        through: models.project_language,
        foreignKey: "project_id",
        as: "languages",
      });
    }
  }
  project.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      feature: DataTypes.STRING,
      git_link: DataTypes.STRING,
      video_link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "project",
    }
  );
  return project;
};
