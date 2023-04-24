const express = require('express');

// Create an Express app
const app = express();

//test responses
app.get('/test', (req, res) => {
  res.send('Test successful!')
})

// Start the server
app.listen(8080, () => {
    console.log('Well Done reached port 8080');
});

// In this example, we 're using the mysql package to create a connection pool to our MySQL database. We then define a route that queries the database for all users and returns the results as a JSON object.

// You 'll need to replace your-mysql-username, your-mysql-password, and your-mysql-database-name with your own MySQL credentials and database name.

// Note that this is just a basic example to get you started.Depending on your needs, you may need to customize this code further to fit your specific use
// case .
