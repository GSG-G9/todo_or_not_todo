const { getSpecificTodo } = require('../database/queries/getData');
const { addTodo } = require('../database/queries/addData');
const { deleteTodo } = require('../database/queries/deleteData');
const { updateData } = require('../database/queries/updateData');


const addNewTodo = (req, res, next) => {
  const { todoText } = req.body;
  // if (!req.id) {
  //   return res.status(401).redirect('/login');
  // }

  addTodo({ userId: 1, todoContent: todoText })
    .then((result) => res.status(201).send(result))
    .catch(next);
};

const getTodos = (req, res, next) => {
  // if (!req.id) {
  //   return res.status(401).redirect('/login');
  // }

  getSpecificTodo(1)
    .then(({ rows }) => res.status(200).json(rows))
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

const removeTodo = (req, res, next) => {
  const { todoId } = req.params;
  // if (!req.id) {
  //   return res.status(401).redirect('/login');
  // }

  deleteTodo(todoId)
    .then(() => res.status(200).json({ sucess: true, status: 200, message: 'Todo removed!' }))
    .catch(next);
};

const updateTodo = (req, res, next) => {
  const { todoContent } = req.body;
  const { todoId } = req.params;
  updateData(todoId, todoContent)
    .then((rows) => res.status(200).json({ sucess: true, status: 200, message: 'Todo update!', rows }))
    .catch(next);
};

module.exports = { addNewTodo, getTodos, removeTodo, updateTodo };
