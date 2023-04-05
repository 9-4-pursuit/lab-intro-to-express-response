const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

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

function getMagic8Response() {
  return magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
}

app.get("/", (req, res) => res.send("Welcome to top gun!"));
app.get("/maverick", (req, res) =>
  res.send("I feel the need, the need for speed!")
);
app.get("/iceman", (req, res) =>
  res.send("That's a negative, Ghost Rider! The pattern is full!")
);
app.get("/goose", (req, res) =>
  res.send("You live your life between your legs, Mav.!")
);
app.get("/viper", (req, res) =>
  res.send(
    " You'll pick up your RIO when you get to the ship, and if you don't, give me a call. ...!"
  )
);
app.get("/merlin", (req, res) => res.send(" You're gonna do what?!"));
app.get("/slider", (req, res) =>
  res.send("I'm gonna make him an offer he can't refuse!")
);
app.get("/jester", (req, res) =>
  res.send(
    "That was some of the best flying I've seen yet. Right up to the part where you got killed. You never, never leave your wing man. !"
  )
);
app.get("/carl", (req, res) => res.send("i love to fly!"));

app.get("/magic8", (req, res) => res.send(`<h1>${getMagic8Response()}</h1>`));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
