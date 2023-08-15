'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      language.belongsToMany(models.project, {
        through: models.project_language,
        foreignKey: 'language_id',
        as:'projects'
      });
    }
  }
  language.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'language',
  });
  return language;
};