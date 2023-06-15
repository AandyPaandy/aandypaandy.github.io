const quotes = [
    "When there's litte you can do, do what little you can",
    "I never walked into anything and found I was simply good at it. The only way I shone at anything in my life was being too much of a stubborn bastard to quit.",
    "Everything not saved will be lost."
];

function timer() {
    setInterval(() => {
        changeQuote()
    }, 5000)
}

function changeQuote() {
    const quoteId = document.getElementById("quote");
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomQuoteIndex];
    quoteId.innerHTML = randomQuote;
}