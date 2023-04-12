const express = require("express");
const app = express();


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

app.get("/terminator", (response, request) => {

    response.send("I'll be back");
    response.send("Hasta la vista, baby")

})

app.get("/Emeril", (response, request) => {
    response.send("Bam!");
})

app.get("/Steve-McGarrett", (response, request) => {
    response.send("Book 'em Danno!")
})

app.get("/Coach-Taylor", (response, request) => {
    response.send("Clear eyes, full hearts, can't Lose")
})

app.get("/Homer-Simpson", (response, request) => {
    response.send("D'Oh")
})

app.get("/Bruce-Banner", (response, request) => {
    response.send("Don't make me angry")
})

app.get("/JJ-Evans", (response, request) => {
    response.send("Dy-no-myte!")
})

app.get("/Batman", (response, request) => {
    response.send("To the Batmobile!")
})

app.get("/Hannibal-Smith", (response, request) => {
    response.send("I love it when a plan comes together")
})

app.get("/Fraiser", (response, request) => {
    response.send("Am listening")
})

app.get("/magic8", (response, request) => {

    let randomPhrase = magic8Responses[Math.floor(Math.random() * magic8Responses)];

    response.send(`<h1>${randomPhrase}</h1>`);
})

// app.get("/", (response, request) => {
//     response.send("")
// })