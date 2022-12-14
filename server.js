// Load Express
const express = require('express');

// Create Express app
const app = express();

// Set View Engine to ejs
app.set('view engine', 'ejs');

// Root
app.get('/', function(req, res) {
    // res.render('index.ejs');
    res.send(`99 bottles of beer on the wall <a href=/98>take one down, pass it around</a>`)
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


// Hungry for more?
// Fibonacci
// Back in your main app:

// Add Fibonnaci as a comment in your application.

// Create a route 'fibonacci'

// This route will take one param, the number we will operate on.

// If the number param is not a fibonacci number (Links to an external site.), print out "I can tell this is not a fibonacci number."

// If the number is a Fibonacci number print out "Very good. It is Fibonacci."

app.get('/fibonacci/:fibonacci_number', function(req, res) {
    const fibonacci = (check, count = 1, last = 0) => {
        if(check === 0 || check === 1) {return true;}
        // let count = 2;
        // let prev = 1;
        // let temp = 0;
        // while(count <= check) {
        //     if((count + prev) === check) {return true;}
        //     temp = prev;
        //     prev = count;
        //     count += temp;
        // }
        // return false;
        if(count < check) {
            return fibonacci(check, count + last, count);
        }
        if(count === check) {
            return true;
        }
        return false;
    }

    if(fibonacci(Number(req.params.fibonacci_number))) {
        res.send(`this is a fibonacci number`);
    }
    else {
        // res.send(`not a fibonacci number, number is Number.isInteger(${Number.isInteger(req.params.fibonacci_number)})`);
        res.send("not a fibonacci number");
    }
})

app.get('/:number_of_bottles', function(req, res) {
    let num = req.params.number_of_bottles;
    // console.log(num);
    // res.send(num)
    if(num > 0) {
        res.send(`${num} bottles of beer on the wall, <a href=/${num-1}>take one down, pass it around</a>`)
    }
    else {
        res.send(`0 bottles of beer on the wall...<a href=/>start over</a>`)
    }
})

// Listen
app.listen(3000, () => {
    console.log('listening port 3000');
})

