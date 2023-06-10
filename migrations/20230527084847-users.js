'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  	async up(queryInterface, Sequelize) {
    	await queryInterface.createTable('users', {
			users_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT
			},
			users_pid: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false
			},
			refine_user_id: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			bank_user_id: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			name: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			mobile: {
				type: Sequelize.STRING
			},
			is_active: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			personal_details: {
				type: Sequelize.JSON
			},
			kyc_details: {
				type: Sequelize.JSON
			},
			address_details: {
				type: Sequelize.JSON
			},
			bank_pid: {
				type: Sequelize.STRING,
				allowNull: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
    	});
  	},
  	async down(queryInterface, Sequelize) {
    	await queryInterface.dropTable('users');
  	}
};