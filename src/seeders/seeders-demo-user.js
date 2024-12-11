'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'accmin@gmail.com',
        password: bcrypt.hashSync('123456', 10),  // Password is now hashed using bcrypt
        firstName: 'Dev',
        lastName: 'Begin',
        address: 'VI',
        gender: 1,
        phoneNumber: '12345',
        image: null,  // Assuming image is optional; adjust as necessary
        roleId: 'r1',  // Ensure this corresponds to an actual valid role ID in your database
        positionId: 'r1',  // Ensure this corresponds to an actual valid position ID

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', {
      email: 'accmin@gmail.com',  // Example condition to delete only this user
    });
  },
};
