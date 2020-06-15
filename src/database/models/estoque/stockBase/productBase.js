const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const productBase = sequelize.define("productBase", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },

    amount: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    available: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    analysis: {
      type: Sequelize.STRING,
      defautValue: "0",
    },

    reserved: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  productBase.associate = (models) => {
    productBase.hasMany(models.equip);

    productBase.belongsTo(models.product, {
      foreignKey: {
        allowNull: false,
      },
    });
    productBase.belongsTo(models.stockBase, {
      foreignKey: {
        allowNull: false,
      },
    }),
      productBase.belongsToMany(models.os, { through: "osParts" });
  };

  return productBase;
};
