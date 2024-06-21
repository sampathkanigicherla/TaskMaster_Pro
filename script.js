document.getElementById('task-form').addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;

    const task = {
        title,
        description,
        dueDate
    };

    fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(data => {
        displayTasks();
        document.getElementById('task-form').reset();
    })
    .catch(error => console.error('Error:', error));
}

function displayTasks() {
    fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(tasks => {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task.title} - ${task.description} - ${task.dueDate}</span>
                <button onclick="deleteTask('${task.id}')">Delete</button>
            `;
            taskList.appendChild(li);
        });
    })
    .catch(error => console.error('Error:', error));
}

function deleteTask(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => displayTasks())
    .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', displayTasks);
