// ------DEPENDANCIES------
const express = require("express");


// ------CONFIGURATION------
const app = express();
const PORT = process.env.PORT || 3003

// adding this magic8 responses
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
//   console.log(getRandomResponse());


//------ROUTES------

app.get(
  "/",
  (request, response) => {
    response.status(418).send("Welcome to LKHiTechNews 🔮");
  })

app.get("/orderup", (request, response) => {
  response.send("Hey World who dis? 🌚");
});

app.get("/orderdown", (request, response) => {
    response.send("Hey Boo what you dew? 🌞");
  });

app.get("/orderside", (request, response) => {
    response.send("you want some fries? 🌕");
  });

app.get("/orderextra", (request, response) => {
    response.send("That sauce ain't free? 🌝");
  });

app.get("/ordercheck", (request, response) => {
    response.send("You paying for this? 🪐");
  });

app.get("/ordermanager", (request, response) => {
    response.send("I am the manager 🌗");
  });

app.get("/orderout", (request, response) => {
    response.send("the box is extra too. 🌩️");
    response.send("You need a box? 🌩️")
    console.log(express)
  });

app.get("/ordertogo", (request, response) => {
    response.send("theres spoons in the bag 🌊");
  });

app.get("/ordernow", (request, response) => {
    response.send("wait for the next level");
  });

app.get("/magic8", (request, response) => {
    const response8 = getRandomResponse();
    response.send(`<h1>${response8}</h1>`)
})


// ------LISTEN------
app.listen(PORT, () => {
  console.log(`waiting for a response on ${PORT}`);
});

// -----EXPORT-----
module.exports = app

