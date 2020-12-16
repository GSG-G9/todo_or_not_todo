const connection = require('../config/connection')
 const getUserId = (userName) => {
 
  return connection.query(`SELECT id FROM users WHERE username = '${userName}';`)
}
module.exports = {getUserId}