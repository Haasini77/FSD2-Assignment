const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1><p>Good Morning</p>');
});

// About route
app.get('/about', (req, res) => {
    res.send('This server is built for learning purpose');
});

// API status route
app.get('/api/status', (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "This server is healthy and responding"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Success! Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop');
});