const router = require('express').Router();
const { addNewUser } = require('./controllers/user');
const { addTodo } = require('./controllers/addTodo');

router.post('/todos', addTodo);
router.post('/signup', addNewUser);

module.exports = router;
