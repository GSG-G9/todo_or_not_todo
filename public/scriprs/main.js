const todoList = document.querySelector('.task-list');
const addTodo = document.querySelector('.add-todo');

const fakeData = [
  {
    id: 1,
    user_id: 1,
    todo_content: 'New Task',
    completed: true,
    createdAt: '12-12-2020',
  },
  {
    id: 2,
    user_id: 1,
    todo_content: 'New Task',
    completed: false,
    createdAt: '12-16-2020',
  },
  {
    id: 2,
    user_id: 2,
    todo_content: 'New Task',
    completed: true,
    createdAt: '12-15-2020',
  },
];

const refreshTodo = () => {
  fetch('/todos')
    .then((res) => res.json())
    .then((data) => {
      renderTodoList(data);
    })
    .catch((err) => console.log(err));
};

const addNewTask = (todoText) => {
  fetch('/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ todoText }),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then(() => refreshTodo())
    .catch((err) => console.log(err));
};

const deleteTask = (todoId) => {
  fetch(`/todos/${todoId}`, {
    method: 'DELETE',
  })
    .then((res) => res.text())
    .then(() => refreshTodo())
    .catch((err) => console.log(err));
};

const updateTodo = (todoId, todoContent) => {
  fetch(`/todos/${todoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ todoContent }),
  })
    .then((res) => res.text())
    .then(() => refreshTodo())
    .catch((err) => console.log(err));
};

const renderTodoItem = (todo) => {
  const taskItem = document.createElement('div');
  taskItem.setAttribute('class', 'task-item');

  const taskContent = document.createElement('div');
  taskContent.setAttribute('class', 'task-content');
  taskContent.setAttribute('dataset-id', todo.id);

  const checkInput = document.createElement('input');
  checkInput.setAttribute('type', 'checkbox');
  checkInput.setAttribute('name', 'check-complete');
  if (todo.completed) {
    checkInput.setAttribute('checked', 'true');
  } else {
    checkInput.removeAttribute('checked');
  }

  const taskInput = document.createElement('input');
  taskInput.setAttribute('type', 'text');
  taskInput.setAttribute('name', 'task-text');
  taskInput.setAttribute('value', todo.todo_content);
  taskInput.setAttribute('readonly', 'true');

  const editTask = document.createElement('span');
  editTask.setAttribute('class', 'edit-task');

  if (todo.completed) {
    editTask.classList.add('hidden');
  }

  checkInput.addEventListener('change', () => {
    if (checkInput.checked === true) {
      taskInput.classList.add('line-through');
      editTask.classList.add('hidden');
    } else if (checkInput.checked !== true) {
      editTask.classList.remove('hidden');
      taskInput.classList.remove('line-through');
    }
  });

  const editIcon = document.createElement('i');
  editIcon.setAttribute('class', 'fas fa-edit');

  const deleteTaskEL = document.createElement('span');
  deleteTaskEL.setAttribute('class', 'edit-task remove-task');
  const deleteIcon = document.createElement('i');
  deleteIcon.setAttribute('class', 'fas fa-times');

  deleteTaskEL.append(deleteIcon);
  editTask.append(editIcon);

  deleteTaskEL.addEventListener('click', () => {
    deleteTask(todo.id);
  });

  const saveChangeElement = document.createElement('span');
  saveChangeElement.setAttribute('class', 'edit-task hidden');
  const saveIcon = document.createElement('i');
  saveIcon.setAttribute('class', 'fas fa-check');
  saveChangeElement.append(saveIcon);

  editIcon.addEventListener('click', () => {
    taskInput.readOnly = false;
    taskInput.focus();
    taskInput.classList.add('edit-case');
    saveChangeElement.classList.remove('hidden');
    saveChangeElement.classList.add('block');
    editTask.classList.add('hidden');
    if (todo.completed) {
      taskInput.classList.add('line-through');
    } else {
      taskInput.classList.remove('line-through');
    }
  });

  saveIcon.addEventListener('click', () => {
    updateTodo(todo.id, taskInput.value);
  });

  saveChangeElement.addEventListener('click', () => {
    taskInput.readOnly = true;
    taskInput.classList.remove('edit-case');
    saveChangeElement.classList.add('hidden');
    saveChangeElement.classList.remove('block');
    editTask.classList.remove('hidden');
  });

  const createdatTask = document.createElement('div');
  createdatTask.setAttribute('class', 'createdat');
  createdatTask.textContent = todo.createdAt;

  taskContent.append(
    checkInput,
    taskInput,
    editTask,
    deleteTaskEL,
    saveChangeElement,
  );
  taskItem.append(taskContent, createdatTask);

  return taskItem;
};

const renderTodoList = (todos) => {
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.lastChild);
  }
  todos.forEach((todo) => {
    const todoItem = renderTodoItem(todo);
    todoList.append(todoItem);
  });
};

// renderTodoList(fakeData);

document.addEventListener('DOMContentLoaded', () => {
  addTodo.addEventListener('click', () => {
    const textTodo = document.querySelector('.new-todo-text');
    addNewTask(textTodo.value);
    refreshTodo();
  });

  refreshTodo();
});
