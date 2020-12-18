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
      'INSERT INTO todos (user_id, todo_content, createdAt) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *;',
    values: [userId, todoContent],
  };

  return connection.query(sql);
};

module.exports = { addTodo, addUser };
