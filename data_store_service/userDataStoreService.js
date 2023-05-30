const userModel = require("../models").Users;

const userDataStoreService = {
    createUser: function(reqData) {
        return new Promise((resolve, reject) => {
            return userModel.create(reqData)
            .then(result => {
                resolve(result.dataValues)
            })
            .catch(error => {
                reject(error)
            })
        });
    },

    fetchUser: function (reqData) {
        return new Promise((resolve, reject) => {
            return userModel.findOne({
                where: reqData.condition,
                raw: true
            }).then(result => {
                resolve(result)
            }).catch(error => {
                reject(error)
            })
        });
    }
}

module.exports = userDataStoreService