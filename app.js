const express = require("express");

const app = express();
console.log(express);

const PORT = process.env.PORT || 3006;

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
  "Very doubtful",
];
const randomIndex = Math.floor(Math.random() * magic8Responses.length);
const randomResponse = magic8Responses[randomIndex];
//ROUTE
app.get("/", (req, response) => {
  response.status(200).send("Welcome to home page");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/laura", (req, res) => {
  res.send("We outside!");
});

app.get("/jr", (req, res) => {
  res.send("I love life time.");
});

app.get("/jenny", (req, res) => {
  res.send("I love making money");
});

app.get("/xaire", (req, res) => {
  res.send("I am a math teacher");
});

app.get("/casey", (req, res) => {
  res.send("I help young black men overcome mental health");
});

app.get("/livpope", (req, res) => {
  res.send("We are gladiators");
});

app.get("/cyrus", (req, res) => {
  res.send("we are the republic!");
});
app.get("/pursuit", (req, res) => res.send("Learn to code for 75k!"));
app.get("/magic8", (req, res) => res.send(`${randomResponse}`));
//LISTEN
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// EXPORT

module.exports = app;
