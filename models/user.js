'use strict';
const { Model } = require('sequelize');

// installed packages import
const moment = require("moment")

module.exports = (sequelize, DataTypes) => {
  	class Users extends Model {
		/**
			* Helper method for defining associations.
			* This method is not a part of Sequelize lifecycle.
			* The `models/index` file will call this method automatically.
		*/
		static associate(models) {
			// define association here
		}
  	}

	Users.init({
		users_id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.BIGINT
		},
		users_pid: {
			type: DataTypes.STRING,
			allowNull: false
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING
		},
		password:{
			allowNull: false,
			type: DataTypes.STRING
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE
		}
	}, {
		hooks: {
		  	beforeCreate: (Users, options) => {
				Users.dataValues.createdAt = moment().format("YYYY-MM-DD HH:mm:ss")
				Users.dataValues.updatedAt = moment().format("YYYY-MM-DD HH:mm:ss")
		  	},
		  	beforeUpdate: (Users, options) => {
				Users.dataValues.updatedAt = moment().format("YYYY-MM-DD HH:mm:ss")
		  	}
		},
		sequelize,
		modelName: 'Users',
		freezeTableName: true
	});
	
	return Users;
};