const Quote = require("../models/Quote");

async function index (req, res) {
    try {
        const quotes = await Quote.showAll();
        res.send(
            `Welcome to the quotes API! There are ${quotes.length} available.`
        );
    } catch (err) {
        res.status(500).send({ error: "Server error" });
    }
};

module.exports = { index };
