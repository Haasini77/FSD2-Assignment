const express = require("express");

const server = express();
const PORT = 5000;

// Middleware to read JSON data
server.use(express.json());

let todoList = [
    { id: 101, title: "Study Node.js" },
    { id: 102, title: "Build an API" }
];

// Get all available tasks
server.get("/tasks", (req, res) => {
    res.send(todoList);
});

// Create a task
server.post("/tasks", (req, res) => {
    const taskData = {
        id: todoList.length + 101,
        title: req.body.title
    };

    todoList.push(taskData);

    res.status(201).send({
        message: "Task created successfully",
        data: taskData
    });
});

// Change an existing task
server.put("/tasks/:id", (req, res) => {
    const requestedId = Number(req.params.id);

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === requestedId) {
            todoList[i].title = req.body.title;

            return res.send({
                message: "Task changed successfully",
                updatedTask: todoList[i]
            });
        }
    }

    res.status(404).send({
        message: "No task found with this ID"
    });
});

// Delete a task
server.delete("/tasks/:id", (req, res) => {
    const requestedId = Number(req.params.id);

    const remaining = todoList.filter(
        task => task.id !== requestedId
    );

    if (remaining.length === todoList.length) {
        return res.status(404).send({
            message: "Task ID not available"
        });
    }

    todoList = remaining;

    res.send({
        message: "Task deleted",
        remainingTasks: todoList
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`REST API server running at http://localhost:${PORT}`);
});