
const { generateRandomKey } = require("../utils/helpers"),
    userDataStoreService = require("../data_store_service/userDataStoreService"),
    helpers = require("../utils/helpers"),
    userTransformer = require("../transformers/userTransformer");

let userService = {
    loginUser: async function(req) {
        try {
            
            let reqData = {
                condition: {
                    email: req.body.username
                }
            }
    
            let user = await userDataStoreService.fetchUser(reqData);
            if (!user) {
                throw {
                    status: 0,
                    httpCode: 400,
                    message: "user not found with given username"
                }
            }

            let passwordCheck = await helpers.decryptPassword(req.body.password, user.password) ? true : false;
            if (!passwordCheck) {
                throw {
                    status: 0,
                    httpCode: 400,
                    message: "invalid password"
                }
            }

            // generate JWT token here...
            let tokenMetaData = {
                iss: "node-api-skelleton",
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000) + (60 * 15),
                aud: "node-api-skelleton",
                sub: user.users_pid,
                users_id: user.users_pid
            }

            user.token = await helpers.generateJwtToken(tokenMetaData, process.env.JWT_SECRET)
            let transformedUser = userTransformer.userLoginTransformer(user)
            return transformedUser;

        } catch (error) {
            throw error
        }
    }
}

module.exports = userService