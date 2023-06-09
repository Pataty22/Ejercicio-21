const { Model, DataTypes } = require("sequelize");

class Article extends Model {
  static initModel(sequelize) {
    Article.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING(1500),
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      { sequelize, modelName: "article" }
    );
    return Article;
  }
}

module.exports = Article;
