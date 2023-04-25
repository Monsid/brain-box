const express = require('express');

// Create an Express app
const app = express();

app.use(express.static('public'));
//test responses
app.get('/test', (req, res) => {
    res.send('Test successful!')
})
app.get('/jesustCrist', (req, res) => {
    const image = '<img src="public/pics/cristhebarbarian.png" alt="Test image">';
    res.send(`Test successful! ${image}`);
});
app.get('/willy', (req, res) => {
    const image = '<img src="public/pics/willythechad.png" alt="Test image">';
    res.send(`Test successful! ${image}`);
});
app.get('/cris', (req, res) => {
    const image = '<img src="public/pics/cristhebarbarian.png" alt="Test image">';
    res.send(`Test successful! ${image}`);
});
app.get('/mario', (req, res) => {
    const image = '<img src="public/pics/mariotheextreme.png" alt="Test image">';
    res.send(`Test successful! ${image}`);
});
app.get('/nathan', (req, res) => {
    const image = '<img src="public/pics/nat.png" alt="Test image">';
    res.send(`Test successful! ${image}`);
});

// Start the server
app.listen(8080, () => {
    console.log('Well Done reached port 8080');
});