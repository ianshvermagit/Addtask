// script.js

// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task
function createTask(taskText) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    
    // Add task text
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    li.appendChild(taskContent);
    
    // Create buttons for complete and delete actions
    const taskBtns = document.createElement('div');
    taskBtns.classList.add('task-btns');
    
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = '✔';
    completeBtn.onclick = () => toggleTaskComplete(li);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '✖';
    deleteBtn.onclick = () => deleteTask(li);
    
    taskBtns.appendChild(completeBtn);
    taskBtns.appendChild(deleteBtn);
    
    li.appendChild(taskBtns);
    
    // Append task to task list
    taskList.appendChild(li);
}

// Function to handle adding a task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        createTask(taskText);
        taskInput.value = ''; // Clear input after adding task
    }
});

// Function to toggle task completion
function toggleTaskComplete(taskElement) {
    taskElement.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(taskElement) {
    taskElement.remove();
}
