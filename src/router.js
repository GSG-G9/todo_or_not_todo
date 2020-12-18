const router = require('express').Router();
const { addNewTodo, getTodos, removeTodo, updateTodo } = require('./controllers/todo');
const { addNewUser } = require('./controllers/user');

router.post('/todos', addNewTodo);

router.get('/todos', getTodos);

router.delete('/todos/:todoId', removeTodo);

router.patch('/todos/:todoId', updateTodo);

router.post('/signup', addNewUser);

module.exports = router;
