const connection = require('../config/connection');

const updateData = (todoId, todoContent) => {
  const userId = 1;
  const sql = {
    text:
      'UPDATE todos SET todo_content = $1 WHERE id = $2 AND user_id = $3 RETURNING *;',
    values: [todoContent, todoId, userId],
  };

  return connection.query(sql);
};

module.exports = { updateData };
