const router = require('express').Router();
const { addNewTodo, getTodos } = require('./controllers/todo');

router.post('/todos', addNewTodo);

router.get('/todos', getTodos);

module.exports = router;
