// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const PORT = process.env.PORT || 3003;

//ROUTES
app.get("/", (req, res) => {
    res.status(418).send("Hello To You All 💎")
});

app.get("/terminator", (req, res) => {
    res.send("I'll be back!")
});

app.get("/tim-gunn", (req, res) => {
    res.send("Make it work!")
});

app.get("/emeril", (req, res) => {
    res.send("Bam!")
});

app.get("/bruce-banner", (req, res) => {
    res.send("Don't make me angry")
});

app.get("/homer-simpson", (req, res) => {
    res.send("D'oh")
});

app.get("/coach-taylor", (req, res) => {
    res.send("Clear eyes, full hearts, can't Lose")
});

app.get("/jj-evans", (req, res) => {
    res.send("Dy-no-myte")
});

app.get("/batman", (req, res) => {
    res.send("To the Batmobile!")
});

app.get("/regis", (req, res) => {
    res.send("Is that your final answer?")
});

app.get("/Leggo", (req, res) => {
    res.send("Nah nah nah nah, nahnahnah");
    res.send("Gettin' jiggy with it")
    console.log(express)
});


//---Extra practice from Lab---
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

function getRandomResponse() {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    return `<h1>${magic8Responses[randomIndex]}</h1>`;
}
console.log(getRandomResponse())

app.get("/magic8", (req, res) => {
    const magic = getRandomResponse();
    res.send(`<h1>${magic}</h1>`)
})


// LISTEN TO PORT
app.listen(PORT, () => {
    console.log(`💎💎💎 Listening on port ${PORT} 💎💎💎`);
});

// EXPORT
module.exports = app