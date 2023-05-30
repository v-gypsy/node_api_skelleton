
const crypto = require('crypto');


const bcrypt = require("bcrypt"),
    jwt = require('jsonwebtoken');


const ALPHA_NUM = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

module.exports = {
    encryptPassword: async (password) => {
        let encryptPassword = await bcrypt.hash(password, 10);
        return encryptPassword;
    },

    decryptPassword: async (data, hash) => {
        let decryptedData = await bcrypt.compare(data, hash)
        return decryptedData;
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
    },

    generateJwtToken: async (data, secret) => {
        return new Promise((resolve, reject) => {
            console.log("here...")
            jwt.sign(data, secret, (error, token) => {
                if (error) {
                    console.error(error)
                    reject(error)
                }

                resolve(token)
            })
        });
    }
}