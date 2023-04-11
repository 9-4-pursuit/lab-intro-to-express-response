const express = require("express")

const app = express();
const PORT = process.env.PORT || 3003;

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

function pick8Message() {
  return magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
}

app.get("/", (request, response) => {
  response.send("Hello, world!")
})

app.get("/tim-gunn", (request, response) => {
  response.send("Make it work")
})

app.get("/homer-simpson", (request, response) => {
  response.send("D'Oh")
})

app.get("/batman", (request, response) => {
  response.send("To the Batmobile!")
})

app.get("/fraiser", (request, response) => {
  response.send("I'm listening")
})

app.get("/borg", (request, response) => {
  response.send("Resistance is futile")
})

app.get("/tony-montana", (request, response) => {
  response.send("Say hello to my little friend")
})

app.get("/fox-mulder", (request, response) => {
  response.send("The truth is out there")
})

app.get("/james-bond", (request, response) => {
  response.send("The name is Bond, James Bond")
})

app.get("/dorothy", (request, response) => {
  response.send("Toto, I've got a feeling we're not in Kansas anymore")
})

app.get("/magic8", (request, response) => {
  response.send(`<h1> ${pick8Message()} <h1>`)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})


