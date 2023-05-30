'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.addColumn("users", 'users_pid', {
			type: Sequelize.STRING,
			allowNull: false
		})
	},

	async down (queryInterface, Sequelize) {
		return queryInterface.removeColumn('users', 'users_pid')
	}
};
