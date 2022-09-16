// Load Express
const express = require('express');

// Create Express app
const app = express();

// Set View Engine to ejs
app.set('view engine', 'ejs');

// Root
app.get('/', function(req, res) {
    res.render('index.ejs');
})

// Greetings
app.get('/greetings', function(req, res) {
    res.send("Hello person without a name");
})
// Greetings with name
app.get('/greetings/:name', function(req, res) {
    res.send("Hello " + req.params.name);
})

// Tip
app.get('/tip/:total/:percentage', function(req, res) {
    res.send("Tip is: " + (req.params.total * (req.params.percentage/100)));
})

// Listen
app.listen(3000, () => {
    console.log('listening port 3000');
})

