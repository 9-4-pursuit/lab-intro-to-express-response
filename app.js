// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const PORT = process.env.PORT || 3003
const app = express();

// ROUTES
//Activity Catchphrases Express
app.get("/terminator", (req, res) => {
    res.status(418).send("I'll be back " + "Hasta la vista, baby");
})

app.get("/homer-simpson", (req, res) => {
    res.status(200).send("D'Oh");
})

app.get("/batman", (req, res) => {
    res.status(200).send("To the Batmobile!");
})

app.get("/tony-montana", (req, res) => {
    res.status(200).send("Say hello to my little friend");
})

app.get("/tony-montana", (req, res) => {
    res.status(200).send("Say hello to my little friend");
})

app.get("/zeus", (req, res) => {
    res.status(200).send("Release the Kraken");
})

app.get("/travis-bickle", (req, res) => {
    res.status(200).send("You talkin' to me?");
})

app.get("/jack-dawson", (req, res) => {
    res.status(200).send("I'm king of the world!");
})

app.get("/frankenstein", (req, res) => {
    res.status(200).send("It's alive! It's alive!");
})

app.get("/gollum", (req, res) => {
    res.status(200).send("My precious");
})


// Activity Magic8 Ball
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
    res.send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}<h1>`);   
})



// LISTEN
app.listen(PORT, () => {
    console.log(`Listening for requests on ${PORT}`)
})

// EXPORT
module.exports = app