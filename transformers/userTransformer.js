
const userObjects = require("./objects/userObjects"),
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
    }
}