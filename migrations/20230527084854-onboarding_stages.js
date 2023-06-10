'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  	async up(queryInterface, Sequelize) {
    	await queryInterface.createTable('onboarding_stages', {
			onboarding_stages_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT
			},
			onboarding_stages_pid: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			name: {
				type: Sequelize.STRING
			},
			details: {
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
    	await queryInterface.dropTable('onboarding_stages');
  	}
};