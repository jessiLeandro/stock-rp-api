module.exports = {
  up: (queryInterface, Sequelize) => {
    const osParts = queryInterface.createTable("osParts", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },

      amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      return: {
        type: Sequelize.STRING,
        defaultValue: "0",
      },

      output: {
        type: Sequelize.STRING,
        defaultValue: "0",
      },

      missOut: {
        type: Sequelize.STRING,
        defaultValue: "0",
      },

      serialNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      outSerialNumbers: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },

      observation: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      serialNumbers: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },

      createdAt: {
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
      },

      updatedAt: {
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
      },

      deletedAt: {
        defaultValue: null,
        type: Sequelize.DATE,
      },
      oId: {
        type: Sequelize.UUID,
        references: {
          model: "os",
          key: "id",
        },
        allowNull: true,
      },
      productBaseId: {
        type: Sequelize.UUID,
        references: {
          model: "productBase",
          key: "id",
        },
        allowNull: true,
      },

      statusExpeditionId: {
        type: Sequelize.UUID,
        references: {
          model: "statusExpedition",
          key: "id",
        },
        allowNull: false,
      },
    });

    osParts.associate = (models) => {
      osParts.belongsTo(models.os);
      osParts.belongsTo(models.productBase);
      osParts.belongsTo(models.statusExpedition, {
        foreignKey: {
          allowNull: false,
        },
      });
    };

    return osParts;
  },

  down: (queryInterface) => queryInterface.dropTable("osParts"),
};
