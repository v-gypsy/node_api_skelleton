'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  	async up(queryInterface, Sequelize) {
    	await queryInterface.createTable('onboarding', {
			onboarding_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT
			},
			onboarding_pid: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			current_stage_id: {
                type: Sequelize.STRING
            },
			stage_details: {
				type: Sequelize.JSON
			},
			users_pid: {
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
    	await queryInterface.dropTable('onboarding');
  	}
};