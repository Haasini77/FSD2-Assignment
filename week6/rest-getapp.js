const express = require('express');

const app = express();

const PORT = 4000;

// Home
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to our API",
        status: "Active"
    });
});

// Students
app.get('/students', (req, res) => {
    const studentList = [
        { id: 101, name: 'Haasini', course: 'MERN Stack' },
        { id: 102, name: 'Manu', course: 'Data Science' },
        { id: 103, name: 'Sahithi', course: 'UI/UX' }
    ];

    res.json(studentList);
});

// Product
app.get('/product/:id', (req, res) => {
    const productId = req.params.id;

    res.json({
        requestedId: productId,
        category: "Electronics",
        inStock: true,
        tags: ["gadget", "new-arrival"]
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});