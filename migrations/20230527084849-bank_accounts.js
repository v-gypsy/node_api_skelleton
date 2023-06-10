'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  	async up(queryInterface, Sequelize) {
    	await queryInterface.createTable('bank_accounts', {
			bank_accounts_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT
			},
			bank_accounts_pid: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			account_type: {
                type: Sequelize.STRING
            },
			account_number: {
				type: Sequelize.STRING
			},
			ifsc_code: {
				type: Sequelize.STRING
			},
			banks_pid: {
				type: Sequelize.STRING
			},
			users_pid: {
				type: Sequelize.STRING
			},
			nominee: {
				type: Sequelize.JSON
			},
			is_active: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
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
    	await queryInterface.dropTable('bank_accounts');
  	}
};