let quotesDiv = document.getElementById('quote')

fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(quote => {
        quotesDiv.innerHTML += '<p>' + quote.value + '</p>'
    })