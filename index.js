document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
    fetch('http://localhost:3000/quote')
        .then(response => response.json())
        .then(data => displayQuote(data))
        .catch(error => console.error('Error fetching data:', error))
}

function displayQuote(data) {
    const quoteContainer = document.getElementById("book-quote");
    const bookInfoContainer = document.getElementById("book-info");

    quoteContainer.innerHTML = "";
    bookInfoContainer.innerHTML = "";

    data.forEach(item => {
        const quoteElement = document.createElement('div');
        const bookElement = document.createElement('div');

        quoteElement.innerHTML = `<q><em> ${item.quote} </em></p>`
        
        bookElement.innerHTML = `
        <ul>
            <li>Title: ${item.book} </li>
            <li>Page: ${item.page}</li>
            <li>Character: ${item.character}</li>
            <li>Author: ${item.author}</li>
        </ul>`

        quoteContainer.appendChild(quoteElement);
        bookInfoContainer.appendChild(bookElement);
    })
}




/*
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

await fetch('localhost:3000/quote')
    .then(res => {
        return res.json();
    }) 
    .then(data => {
        console.log(data);
    })

*/