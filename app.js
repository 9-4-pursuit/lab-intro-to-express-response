// Dependencies
const express = require("express");

// Configuration
const app = express();

// Routes
app.get("/", (req, res) => {
    res.status(200).send("Hello worlds!");
})

app.get("/terminator", (req, res) => {
    res.send("I'll be back");
    // res.send("Hasta la vista, baby!");
})

app.get("/bruce-banner", (request, response) => {
    response.send("Don't make me angry")
})

app.get("/batman", (req, res) => {
    res.send("To the Batmobile!")
})

app.get("/fraiser", (request, response) => {
    response.send("I'm listening")
})

app.get('/gollum', (request, response) => {
    response.send('My precious')
})

app.get('/scorpion', (req, res) => {
    res.send("Get over here!")
})


app.get("/magic8", (req, res) => {

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
    res.send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}</h1>`)
})

// Export
module.exports = app
