'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  	async up(queryInterface, Sequelize) {
    	await queryInterface.createTable('banks', {
			banks_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT
			},
			banks_pid: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			name: {
				type: Sequelize.STRING
			},
			code: {
				type: Sequelize.STRING
			},
			meta_data: {
				type: Sequelize.JSON
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
    	await queryInterface.dropTable('banks');
  	}
};