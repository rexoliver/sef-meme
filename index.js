let messageDiv = document.getElementById('quote')

fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(quote => {
        messageDiv.innerHTML += '<p> ${quote.quote} </p>'
    })