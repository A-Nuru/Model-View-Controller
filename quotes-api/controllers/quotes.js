const Quote = require("../models/Quote");

async function index (req, res) {
    try {
        const quotes = await Quote.showAll();
        res.send(quotes);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};


module.exports = { index };
