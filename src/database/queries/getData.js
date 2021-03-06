const connection = require('../config/connection');

// const getAllTodos = () => connection.query('SELECT * FROM todos;');

const getSpecificTodo = (userId) => {
  const sql = {
    text: 'SELECT * FROM todos WHERE user_id = $1;',
    values: [userId],
  };
  return connection.query(sql);
};
const getUser = ({ email, username }) => {
  const sql = {
    text: 'SELECT * FROM users WHERE email = $1 OR username = $2;',
    values: [email, username],
  };
  return connection.query(sql);
};
module.exports = { getSpecificTodo, getUser };
