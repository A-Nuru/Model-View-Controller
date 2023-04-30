const quotes = require("../quotes");

class Quote {
    constructor(quote) {
        this.id = quote.id;
        this.text = quote.text;
        this.author = quote.author;
    }

    static showAll() {
        return quotes.map(quote => new Quote(quote));
    }

}

module.exports = Quote;


