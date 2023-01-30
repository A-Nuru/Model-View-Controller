const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const quotes = require("./quotes");

app.get('/', (req, res) => {
    res.send(`Welcome to the quotes API! There are ${quotes.length} available.`);
})

app.get('/quotes', (req, res) => {
    res.send(quotes);
})

app.get('/quotes/random', (req, res) => {
    const randIdx = Math.floor(Math.random() * quotes.length);
    res.send(quotes[randIdx]);
})

app.get('/quotes/:id', (req, res) => {
    const idx = parseInt(req.params.id);
    const quote = quotes.find(q => q.id === idx);

    if (quote) {
        res.send(quote);
    } else {
        res.status(404).send({
            error: "Quote not found."
        })
    }
})

module.exports = app;