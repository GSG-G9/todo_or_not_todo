const connection = require('../config/connection');

const deleteTodo = (todoId) => {
const userId = 1;
  const sql = {
    text:
      'DELETE FROM todos WHERE id = $1 AND user_id = $2;',
    values: [todoId, userId],
  };

  return connection.query(sql);
};

module.exports = { deleteTodo };
