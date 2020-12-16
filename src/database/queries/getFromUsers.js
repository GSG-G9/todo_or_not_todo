const connection = require('../config/connection')
 const getFromUsers = (userName) => {
 
  return connection.query(`SELECT username FROM users WHERE username = '${userName}';`)
}

 //  const sql = {
  //    text: 'SELECT * FROM users WHERE username = $1',
  //    values: [userName]
  //  }
  module.exports =  {getFromUsers}
