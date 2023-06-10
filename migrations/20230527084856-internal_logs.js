'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  	async up(queryInterface, Sequelize) {
    	await queryInterface.createTable('internal_logs', {
			internal_logs_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT
			},
			internal_logs_pid: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			endpoint: {
				type: Sequelize.STRING
			},
			headers: {
				type: Sequelize.JSON
			},
			request: {
				type: Sequelize.JSON
			},
			response: {
				type: Sequelize.JSON
			},
			service: {
				type: Sequelize.STRING
			},
			http_status_code: {
				type: Sequelize.INTEGER
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
    	await queryInterface.dropTable('internal_logs');
  	}
};