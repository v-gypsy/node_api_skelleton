'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  	async up(queryInterface, Sequelize) {
    	await queryInterface.createTable('transactions', {
			transactions_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT
			},
			transactions_pid: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			debit_account_pid: {
				type: Sequelize.STRING
			},
			beneficiary_pid: {
				type: Sequelize.STRING
			},
			users_pid: {
				type: Sequelize.STRING
			},
			amount: {
				type: Sequelize.FLOAT
			},
			remarks: {
				type: Sequelize.TEXT
			},
			type: {
				type: Sequelize.ENUM,
				values: ["imps", "neft", "rtgs"]
			},
			status: {
				type: Sequelize.ENUM,
				values: ["success", "pending", "failed"]
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
    	await queryInterface.dropTable('transactions');
  	}
};