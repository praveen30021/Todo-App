let tasks = [];

    
    function loadTasksFromLocalStorage() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
      }
    }

    
    function saveTasksLocally() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    loadTasksFromLocalStorage();

    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const task = taskInput.value.trim();

      if (task !== '') {
        tasks.push(task);
        saveTasksLocally(); 
        renderTasks();
        taskInput.value = '';
      }
    }

    function removeTask(index) {
      tasks.splice(index, 1);
      saveTasksLocally(); 
      renderTasks();
    }

    function editTask(index) {
      const newTask = prompt('Enter the new task:');
      if (newTask !== null && newTask.trim() !== '') {
        tasks[index] = newTask.trim();
        saveTasksLocally(); 
        renderTasks();
      }
    }

    function resetTasks() {
      tasks = [];
      localStorage.removeItem('tasks'); 
      renderTasks();
    }

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
