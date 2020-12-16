const { getSpecificTodo } = require('../database/queries/getData');
const { addTodo } = require('../database/queries/addData');

const addNewTodo = (req, res, next) => {
  const { todoText } = req.body;
  console.log(todoText);
  if (!req.id) {
    return res.status(401).redirect('/login');
  }

  addTodo({ userId: req.id, todoText })
    .then((result) => res.status(201).send(result))
    .catch(next);
};

const getTodos = (req, res, next) => {
  // if (!req.id) {
  //   return res.status(401).redirect('/login');
  // }

  getSpecificTodo(1)
    .then((result) => res.status(200).json(result))
    .catch(next);
};

module.exports = { addNewTodo, getTodos };
