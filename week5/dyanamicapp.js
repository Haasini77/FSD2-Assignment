const express = require('express');

const app = express();

const PORT = 2000;

// User Profile
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    res.send(`
        <h1>User Profile</h1>
        <p>You are viewing the profile for User ID:
        <strong>${userId}</strong></p>
    `);
});

// Flights
app.get('/flights/:from/:to', (req, res) => {
    const { from, to } = req.params;

    res.send(`
        Searching for flights departing from
        <b>${from}</b> arriving at <b>${to}</b>.
    `);
});

// Search
app.get('/search', (req, res) => {
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Search Results",
        filteringBy: category || "None",
        sortingBy: sort || "Default"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server.');
});