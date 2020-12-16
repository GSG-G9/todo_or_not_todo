const router = require('express').Router();
const { addNewUser } = require('./controllers/user');
const { addTodo } = require('./controllers/addTodo');
const { checkUserName, validateLogin, Login } = require('./controllers/index');

router.post('/todos', addTodo);
router.post('/login', validateLogin, checkUserName, Login);
router.post('/signup', addNewUser);

module.exports = router;
