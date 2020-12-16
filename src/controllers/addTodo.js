const addTodo = (req, res) => {
  const { todoText } = req.body;
  console.log(todoText);
  res.send(todoText);
};

module.exports = { addTodo };
