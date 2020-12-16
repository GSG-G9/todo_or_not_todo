const router = require('express').Router();
const { addTodo } = require('./controllers/addTodo');
const { checkUserName, validateLogin, Login } = require('./controllers/index');

router.post('/todos', addTodo);
router.post('/login', validateLogin, checkUserName, Login);


module.exports = router;
