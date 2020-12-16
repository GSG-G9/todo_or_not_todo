const router = require('express').Router();
const { addTodo } = require('./controllers/addTodo');

router.post('/todos', addTodo);

module.exports = router;
