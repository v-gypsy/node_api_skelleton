
const { generateRandomKey } = require("../utils/helpers"),
    userDataStoreService = require("../data_store_service/userDataStoreService"),
    helpers = require("../utils/helpers"),
    userTransformer = require("../transformers/userTransformer");

let userService = {
    createUser: async function(req) {
        try {
            
            let reqData = {
                users_pid: `us_${await generateRandomKey(25)}`,
                name: req.body.name,
                email: req.body.email,
                password: await helpers.encryptPassword(req.body.password)
            }
    
            let createUserResponse = await userDataStoreService.createUser(reqData);
            let transformedUser = await userTransformer.createUserTransformer(createUserResponse)

            return transformedUser;

        } catch (error) {
            return error;
        }
    }
}

module.exports = userService