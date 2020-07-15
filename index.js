let messageDiv = document.getElementById('message')

fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(message => {
        messageDiv.innerHTML += '<p> ${message.value} </p>'
    })