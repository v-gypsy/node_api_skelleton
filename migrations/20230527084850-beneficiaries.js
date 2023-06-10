'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  	async up(queryInterface, Sequelize) {
    	await queryInterface.createTable('beneficiaries', {
			beneficiary_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT
			},
			beneficiary_pid: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			name: {
				type: Sequelize.STRING
			},
			account_number: {
				type: Sequelize.INTEGER
			},
			account_type: {
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
    	await queryInterface.dropTable('beneficiaries');
  	}
};