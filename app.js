const express = require('express');
const PORT = process.env.PORT || 3003;
const app = express();

app.get('/terminator', (request, response) => {
    response.status(418).send("I\ll be Back")
    response.status(418).send('Hasta la vista, baby')
})
app.get('/tim-gunn', (request, response) => {
    response.status(200).send('Make it work')
})
app.get('/emeril', (request, response) => {
    response.status(200).send('Bam!')
})
app.get('/coach-taylor', (request, response) => {
    response.status(200).send('Clear eyes, full hearts, can\t Lose')
})
app.get('/homer-simpson', (request, response) => {
    response.status(200).send('D\Oh')
})
app.get('/fraiser', (request, response) => {
    response.status(200).send('I\m listening')
})
app.get('/regis', (request, response) => {
    response.status(200).send('Is that your final answer?')
})
app.get('/zeus', (request, response) => {
    response.status(200).send('Release the Kraken')
})
app.get('/james-bond', (request, response) => {
    response.status(200).send('the name is Bond, James Bond')
})
app.get('/frankenstein', (request, response) => {
    response.status(200).send('It\s alive! It\s alive')
})
app.get('/jim-lovell', (request, response) => {
    response.status(200).send('Houston, we have a problem')
})

app.get('/magic8', (request, response) => {
    response.status(200).send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}</h1>`)
})
const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

// // ROUTES
// app.get('/', (request, response) => {
//     response.status(200).send('Hello, world!')
// })

// ROUTES
app.get('/', (request, response) => {
    response.status(200).send('Hello, world!')
})
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`);
})
module.exports = app