module.exports = {
    development: {
        "operatorsAliases": 0,
        "logging": false,
        "define": {
            "underscored": false,
            "timestamps": true
        },
        "database": process.env.DB_NAME,
        "dialect": process.env.DB_DIALECT,
        "replication": {
            "read": [{
                "host": process.env.DB_REPLICA_HOST,
                "username": process.env.DB_USER,
                "password": process.env.DB_PASS
            }],
            "write": {
                "host": process.env.DB_HOST,
                "username": process.env.DB_USER,
                "password": process.env.DB_PASS
            }
        }
    },
    uat: {
        "operatorsAliases": 0,
        "logging": false,
        "define": {
            "underscored": false,
            "timestamps": true
        },
        "database": process.env.DB_NAME,
        "dialect": process.env.DB_DIALECT,
        "replication": {
            "read": [{
                "host": process.env.DB_REPLICA_HOST,
                "username": process.env.DB_USER,
                "password": process.env.DB_PASSWORD
            }],
            "write": {
                "host": process.env.DB_HOST,
                "username": process.env.DB_USER,
                "password": process.env.DB_PASSWORD
            }
        }
    },
    production: {
        "operatorsAliases": 0,
        "logging": false,
        "define": {
            "underscored": false,
            "timestamps": true
        },
        "database": process.env.DB_NAME,
        "dialect": process.env.DB_DIALECT,
        "replication": {
            "read": [{
                "host": process.env.DB_REPLICA_HOST,
                "username": process.env.DB_USER,
                "password": process.env.DB_PASSWORD
            }],
            "write": {
                "host": process.env.DB_HOST,
                "username": process.env.DB_USER,
                "password": process.env.DB_PASSWORD
            }
        }
    }
}