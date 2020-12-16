const addTodo = (req, res) => {
  const { todoText } = req.body;
  console.log(todoText);
  return res.send(todoText);
};

module.exports = { addTodo };
