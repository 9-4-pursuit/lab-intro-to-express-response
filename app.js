// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()

// Variable for route
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

// ROUTES
app.get('/', (request, response) => {
    response.send('Hello, planet!')
})

app.get('/terminator', (request, response) => {
    response.send("I'll be back" + "\n" + "Hasta la vista, baby")
})

app.get('/tim-gunn', (request, response) => {
    response.send('Make it work')
})

app.get('/Zeus', (request, response) => {
    response.send('Release the Kraken')
})

app.get('/Mon-Cala', (request, response) => {
    response.send("It's a trap!")
})

app.get('/Sokka', (request, response) => {
    response.send('Boomerang Squad')
})

app.get('/Gollum', (request, response) => {
    response.send('My precious')
})

app.get('/frankenstein', (request, response) => {
    response.send("It's alive! It's alive!")
})

app.get('/Jim-Lovell', (request, response) => {
    response.send('Houston, we have a problem')
})

app.get('/toph', (request, response) => {
    response.send('Twinkle toes')
})

app.get('/zuko', (request, response) => {
    response.send("That's rough, buddy")
})

app.get('/magic8', (request, response) => {
    response.send(`<h1>${magic8Responses[Math.floor(Math.random() * (magic8Responses.length - 1))]}<h1>`)
})

// EXPORT
module.exports = app

