
const express = require("express")
const PORT = process.env.PORT || 3005

const app = express()

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

  function getRandom() {
    const index = Math.floor(Math.random() * magic8Responses.length)
    return magic8Responses[index]
  }

  app.get("/magic", (request, response) => {
    const answer = getRandom()
    response.send(`<h1>${answer}<h1>`)
})

app.get("/", (request, response) => {
    console.log("hello world")
})




app.get("/terminator", (request, response) => {
    response.send("I'll be back")
})

app.listen(PORT, () => {
    console.log(`listen for port ${PORT}`)
})

// app.listen(PORT, () => {
//     console.log("Listening for port 3003")
// })

// lil baby

app.get("/lilbaby", (request, response) => {
    response.send("this watch a cool quarter mill it aint come from me punching a clock")
})

// James Bond

app.get("/jamesb", (request, response) => {
    response.send("the name is Bond, James Bond")
})

app.get("/travis", (request, response) => {
    response.send("Straight up!!")
})

app.get("/kidcudi", (request, response) => {
    response.send("everything that glitters aint gold")
})

app.get("/uzivert", (request, response) => {
    response.send("I dont really care if you cry")
})

app.get("/anuel", (request, response) => {
    response.send("real hasta la muerte brrrrr")
})

app.get("/50cent", (request, response) => {
    response.send("you could find me in the club, bottle full of bub")
})

app.get("/popsmoke", (request, response) => {
    response.send("if you dont got your nails done you are not it")
})


module.exports = app