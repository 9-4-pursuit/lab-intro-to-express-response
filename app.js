// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// DATA
const data = require("./data.js")
const magic8Responses = data.magic8Responses;
const quotes = data.quotes;

// ROUTES
app.get("/", (request, response) => {
  response.send("Hello!");
})

app.get('/', (request, response) => {
  response.status(200).send('Hello, world!')
})

app.get("/terminator", (req, res) => {
  res.send('I\'ll be back');
})

app.get("/wayne-gretzky", (req, res) => {
  res.send("You miss 100% of the shots you don’t take.");
})

app.get("/random-quotes", (req, res) => {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  res.send(`<h1>${quotes[randomQuote].quote}</h1><p>by ${quotes[randomQuote].author}</p>`);
})

app.get("/magic8", (req, res) => {
  const randomMagic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  res.send(`<h1>${randomMagic8Answer}</h1>`);
})


// EXPORT
module.exports = app;