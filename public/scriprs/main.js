const todoList = document.querySelector('.task-list');

const fakeData = [
  {
    id: 1,
    user_id: 1,
    todo_content: 'New Task',
    completed: true,
    createdAt: '12-12-2020',
  }, {
    id: 2,
    user_id: 1,
    todo_content: 'New Task',
    completed: false,
    createdAt: '12-16-2020',
  }, {
    id: 2,
    user_id: 2,
    todo_content: 'New Task',
    completed: true,
    createdAt: '12-15-2020',
  },
];

const renderTodoItem = (todo) => {
  const taskItem = document.createElement('div');
  taskItem.setAttribute('class', 'task-item');

  const taskContent = document.createElement('div');
  taskContent.setAttribute('class', 'task-content');
  taskContent.setAttribute('dataset-id', todo.id);

  const checkInput = document.createElement('input');
  checkInput.setAttribute('type', 'checkbox');
  checkInput.setAttribute('name', 'check-complete');
  checkInput.setAttribute('checked', todo.completed);

  const taskInput = document.createElement('input');
  taskInput.setAttribute('type', 'text');
  taskInput.setAttribute('name', 'task-text');
  taskInput.setAttribute('value', todo.todo_content);
  taskInput.setAttribute('readonly', 'true');

  const editTask = document.createElement('span');
  editTask.setAttribute('class', 'edit-task');

  const editIcon = document.createElement('i');
  editIcon.setAttribute('class', 'fas fa-edit');

  
  editTask.append(editIcon);
  
  const saveChangeElement = document.createElement('span');
  saveChangeElement.setAttribute('class', 'edit-task hidden');
  const saveIcon = document.createElement('i');
  saveIcon.setAttribute('class', 'fas fa-check');
  saveChangeElement.append(saveIcon);

  editIcon.addEventListener('click', (e) => {
    taskInput.readOnly = false;
    taskInput.focus();
    taskInput.classList.add('edit-case');
    saveChangeElement.classList.remove('hidden');
    saveChangeElement.classList.add('block');
    editTask.classList.add('hidden');
  });

  saveChangeElement.addEventListener('click', (e) => {
    taskInput.readOnly = true;
    taskInput.classList.remove('edit-case');
    saveChangeElement.classList.add('hidden');
    saveChangeElement.classList.remove('block');
    editTask.classList.remove('hidden');
  });

  if (checkInput.checked === true) {
    taskInput.classList.add('line-through');
  }

  checkInput.addEventListener('change', () => {
    taskInput.classList.toggle('line-through');
  });

  const createdatTask = document.createElement('div');
  createdatTask.setAttribute('class', 'createdat');
  createdatTask.textContent = todo.createdAt;

  taskContent.append(checkInput, taskInput, editTask, saveChangeElement);
  taskItem.append(taskContent, createdatTask);

  return taskItem;
};

const renderTodoList = (todos) => {
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.lastChild);
  }
  todos.forEach((todo) => {
    const todoItem = renderTodoItem(todo);
    console.log(todoItem);
    todoList.append(todoItem);
  });
};

renderTodoList(fakeData);

// document.addEventListener('DOMContentLoaded', () => {
//   fetch('/todos').then((res) => res.json()).then((data) => {
//     renderTodoList(data);
//   }).catch((err) => console.log(err));
// });
