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

// Magic 8 Ball
app.get('/magic/:message', function(req, res) {
    let magic8Ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let random= Math.floor(Math.random() * magic8Ball.length);
    res.send(`<h1>${req.params.message}</h1><h1>${magic8Ball[random]}</h1>`);
})


// Listen
app.listen(3000, () => {
    console.log('listening port 3000');
})

