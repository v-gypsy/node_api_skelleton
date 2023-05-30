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
    }
}

module.exports = userDataStoreService