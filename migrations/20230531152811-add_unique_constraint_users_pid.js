'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.addConstraint("users", {
      type: 'unique',
      fields: ['users_pid']
    })
	},

	async down (queryInterface, Sequelize) {
		return queryInterface.removeConstraint('users', ('users_pid'), 'unique')
	}
};
