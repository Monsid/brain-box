const express = require('express');

// Create an Express app
const app = express();

// Define a route that queries the database
app.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

// Start the server
app.listen(80, () => {
    console.log('Well Done reached port 80');
});

// In this example, we 're using the mysql package to create a connection pool to our MySQL database. We then define a route that queries the database for all users and returns the results as a JSON object.

// You 'll need to replace your-mysql-username, your-mysql-password, and your-mysql-database-name with your own MySQL credentials and database name.

// Note that this is just a basic example to get you started.Depending on your needs, you may need to customize this code further to fit your specific use
// case .