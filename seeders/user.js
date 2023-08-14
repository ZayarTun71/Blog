module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Zayar Tun1",
        email: "zayartun@gmail.com",
        password:
          "$2b$10$eixc9e0tDiwGnqIZNNohh.z8rN6jALRkdMibtMMwd8GXnmQWhQBiW",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
