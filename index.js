let messageDiv = document.getElementById('quote')

fetch('https://kanye.rest')
    .then(res => res.json())
    .then(quote => {
        messageDiv.innerHTML += '<p> ${quote.quote} </p>'
    })