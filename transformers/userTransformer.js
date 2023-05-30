
const userObjects = require("./objects/userObjects"),
    loginObject = require("./objects/loginObject"),
    {cloneObject} = require("../utils/helpers");

module.exports = {
    createUserTransformer: async (user) => {
        let returnObject = await cloneObject(userObjects.createUser)
        returnObject.id = user.users_pid,
        returnObject.name = user.name,
        returnObject.email = user.email,
        returnObject.created_at = user.createdAt
        returnObject.updated_at = user.updatedAt

        return returnObject;
    },

    userLoginTransformer: async (user) => {
        let returnObject = await cloneObject(loginObject.loginObject)
        returnObject.id = user.users_pid,
        returnObject.email = user.email,
        returnObject.token = user.token

        return returnObject;
    }
}