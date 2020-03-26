module.exports = {
  up: (queryInterface, Sequelize) => {
    const resources = queryInterface.createTable("resources", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      addCompany: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addPart: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addAnalyze: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addEquip: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addEntry: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addEquipType: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      tecnico: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addAccessories: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addUser: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addTypeAccount: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },

      addTec: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addCar: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addMark: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addType: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addProd: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addFonr: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addEntr: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addKit: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addKitOut: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addOutPut: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addROs: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addRML: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      gerROs: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      delROs: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      updateRos: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      addStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      },

      updatedAt: {
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      },

      deletedAt: {
        defaultValue: null,
        type: Sequelize.DATE
      },

      typeAccountId: {
        type: Sequelize.UUID,
        references: {
          model: "typeAccount",
          key: "id"
        },
        allowNull: true
      }
    });

    return resources;
  },

  down: queryInterface => queryInterface.dropTable("resources")
};
