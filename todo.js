// Store tasks in an array
let tasks = [];

// Function to add a task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== '') {
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Function to edit a task
function editTask(index) {
  const newTask = prompt('Enter the new task:');
  if (newTask !== null && newTask.trim() !== '') {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

// Function to reset tasks
function resetTasks() {
  tasks = [];
  renderTasks();
}

// Function to render tasks in the UI
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const listItem = document.createElement('li');
    listItem.textContent = task;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeTask(i);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTask(i);

    listItem.appendChild(removeButton);
    listItem.appendChild(editButton);

    taskList.appendChild(listItem);
  }
}
