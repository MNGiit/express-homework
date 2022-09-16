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

// Listen
app.listen(3000, () => {
    console.log('listening port 3000');
})

