"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@gmail.com",
          uuid: '2bf41235-bf06-4c60-ad6e-94a7dd911733',
          role: "admin",
          createdAt: "2022-09-08T09:00:21.414Z",
          updatedAt: "2022-09-08T09:00:21.414Z"
        },
        {
          name: "Jane Doe",
          email: "jane@gmail.com",
          uuid: '2bf41235-bf06-4c60-ad6e-94a7dd122733',
          role: "superadmin",
          createdAt: "2022-09-08T09:00:21.414Z",
          updatedAt: "2022-09-08T09:00:21.414Z"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  },
};
