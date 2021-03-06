const connection = require('../config/connection');

const addUser = ({ username, email, password }) => {
  const sql = {
    text:
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;',
    values: [username, email, password],
  };

  return connection.query(sql);
};

const addTodo = ({ userId, todoContent }) => {
  const sql = {
    text:
      'INSERT INTO todos (users_id, todo_content, completed, createdAt) VALUES ($1, $2, false, CURRENT_TIMESTAMP) RETURNING *;',
    values: [userId, todoContent],
  };

  return connection.query(sql);
};
module.exports = { addUser, addTodo };
