const connection = require('../config/connection')
const getHashedPassword = (userName) => {
    return connection.query(`SELECT password FROM users WHERE username = '${userName}';`)
}

module.require = {getHashedPassword}