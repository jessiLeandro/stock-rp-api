module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "stockBase",
      [
        {
          id: "586b4f99-768b-457f-81fb-65dea9196095",
          stockBase: "REALPONTO",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "15a21569-1dd2-4859-9180-8f6455896995",
          stockBase: "NOVAREAL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "92cf144d-9168-4833-9a8b-75e91f64c6e5",
          stockBase: "PONTOREAL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "5216256a-70d6-4719-99c2-0ce87b0e31a1",
          stockBase: "EMPRESTIMO",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete("stockBase", null, {})
};
