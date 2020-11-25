module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    "resources",
    [
      {
        id: "acf54130-5528-469d-9c63-5c8a0b336a1f",
        addCompany: true,
        addPart: true,
        addAnalyze: true,
        addEquip: true,
        addEntry: true,
        addEquipType: true,
        tecnico: true,
        addAccessories: true,
        addUser: true,
        addTypeAccount: true,
        addTec: true,
        addCar: true,
        addMark: true,
        addType: true,
        addProd: true,
        addFonr: true,
        addEntr: true,
        addKit: true,
        addKitOut: true,
        addOutPut: true,
        addROs: true,
        addRML: true,
        gerROs: true,
        delROs: true,
        updateRos: true,
        addStatus: true,
        typeAccountId: "123e4567-e89b-12d3-a456-426655440000",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: queryInterface => queryInterface.bulkDelete("resources", null, {})
}
