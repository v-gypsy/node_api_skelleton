
const crypto = require('crypto');


const bcrypt = require("bcrypt");


const ALPHA_NUM = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

module.exports = {
    encryptPassword: async (password) => {
        let encryptPassword = await bcrypt.hash(password, 10);
        return encryptPassword;
    },

    generateRandomKey: async (length) => {
        const random = crypto.randomBytes(length),
            value = new Array(length),
            charactersLength = ALPHA_NUM.length;
        
        for(let i = 0; i < length; i++) {
            value[i] = ALPHA_NUM[random[i]%charactersLength]
        }

        return value.join('');
    },

    cloneObject: async (returnObject) => {
        let clone = {};
        for (let key in returnObject) {
            if (returnObject.hasOwnProperty(key)) { // ensure not adding inherited props
                clone[key] = returnObject[key]
            }
        }

        return clone;
    }
}