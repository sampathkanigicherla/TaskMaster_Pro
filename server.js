const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let tasks = [];

// Endpoint to get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Endpoint to add a single task
app.post('/tasks', (req, res) => {
    const task = { id: uuidv4(), ...req.body };
    tasks.push(task);
    res.json(task);
});

// Endpoint to get a task by ID
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});

// Endpoint to update a task by ID
app.put('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === req.params.id);
    if (taskIndex !== -1) {
        tasks[taskIndex] = { id: req.params.id, ...req.body };
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).send('Task not found');
    }
});

// Endpoint to delete a task by ID
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id !== req.params.id);
    res.send('Task deleted');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
