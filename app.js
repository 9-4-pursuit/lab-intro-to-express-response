
const express = require("express");
const PORT = process.env.PORT || 3005;

const app = express();

app.get("/tim-gunn", (request, response) => {
    response.send("Make it work");
    })

    app.get("/Emeril", (request, response) => {
        response.send("Bam!");
        })

    app.get("/SteveMcGarrett", (request, response) => {
            response.send("Book 'em Danno!");
            })

    app.get("/HomerSimpson", (request, response) => {
                response.send("D'Oh");
                })

    app.get("/Harry-Callahan", (request, response) => {
                    response.send("Go ahead, make my day");
                    })

    app.get("/Zeus", (request, response) => {
                        response.send("Release the Kraken");
                        })

    app.get("/gollum", (request, response) => {
                            response.send("My precious");
                            })

    app.get("/JackDawson", (request, response) => {
                                response.send("I'm king of the world!");
                                })

    app.get("/Regis", (request, response) => {
                                    response.send("Is that your final answer?");
                                    })                        



    app.get('/terminator', (req, res) => {
                res.send('I\ll be back')
                res.send('Hasta la vista, baby')
              })


    app.get('/magic8', (req, res) => {
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
  res.send(`<h1>${magic8Responses[Math.ceil(Math.random() * 10)]}</h1>`)
})

// ROUTES
// app.get('/', (request, response) => {
//     response.status(200).send('Hello, world!')
// })

     // ROUTES
app.get('/', (request, response) => {
    response.status(418).send('Hello, world!')
})
         

    app.listen(PORT, () => {
        console.log(`Listening for Requests on Port ${PORT}`)
    })

    // EXPORT
module.exports = app
