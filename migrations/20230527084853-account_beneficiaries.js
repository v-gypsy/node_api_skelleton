'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  	async up(queryInterface, Sequelize) {
    	await queryInterface.createTable('account_beneficiaries', {
			account_beneficiaries_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT
			},
			account_beneficiaries_pid: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			bank_pid: {
				type: Sequelize.STRING
			},
			beneficiary_pid: {
				type: Sequelize.STRING
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
    	await queryInterface.dropTable('account_beneficiaries');
  	}
};