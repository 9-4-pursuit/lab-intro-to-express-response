const express = require("express");

const app = express();

app.get("", (request, response) => {
  response.status(200).send("Hello, world!")
})

app.get("/terminator", (request, response) => {
  response.send(`I'll be back`)
  response.send("Hasta la vista, baby")
})

app.get("/gollum", (request, response) => {
  response.send("My precious")
})

app.get("/homersimpson", (request, response) => {
  response.send(`D'oh`)
})

app.get("/zues", (request, response) => {
  response.send("Release the Kraken")
})

app.get("/luffy", (request, response) => {
  response.send(`I'll become the King of the Pirates`)
})

app.get("/gashbell", (request, response) => {
  response.send(`I'll become a kind king`)
})

app.get("/jamesbond", (request, response) => {
  response.send("The name is Bond, James Bond")
})

app.get("/naruto", (request, response) => {
  response.send("Believe it")
})

app.get("/tonymontana", (request, response) => {
  response.send("Say hello to my little friend")
})

app.get("/foxmulder", (request, response) => {
  response.send("The truth is out there")
})

app.get("/magic8", (request, response) => {
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

  response.send(`<h1>${magic8Responses[Math.floor(Math.random() *  magic8Responses.length)]}</h1>`)
})



module.exports = app;