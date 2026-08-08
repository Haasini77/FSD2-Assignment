const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Custom logging middleware
app.use((req, res, next) => {
    const time = new Date().toLocaleString();

    console.log(`[${time}] Request: ${req.method} -> ${req.url}`);

    next();
});

// Mock data
let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Practice REST API" }
];

// GET - Read all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST - Create a new task
app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task created successfully",
        task: newTask
    });
});

// PUT - Update a task
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(item => item.id === id);

    if (task) {
        task.title = req.body.title;

        res.json({
            message: "Task updated successfully",
            task: task
        });
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});

// DELETE - Delete a task
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const oldCount = tasks.length;

    tasks = tasks.filter(item => item.id !== id);

    if (tasks.length < oldCount) {
        res.json({
            message: `Task ${id} deleted`,
            remainingTasks: tasks
        });
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log('--------------------------------');
    console.log(`REST API running at http://localhost:${PORT}`);
    console.log('Waiting for requests...');
    console.log('--------------------------------');
});