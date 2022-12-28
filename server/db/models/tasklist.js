const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tasklist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasklist.init({
    taskName: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN,
    isEdit: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Tasklist',
  });
  return Tasklist;
};
