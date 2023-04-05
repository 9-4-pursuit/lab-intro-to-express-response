const express = require("express");

// const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello, world!")
})

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
    // res.send('Hasta la vista, baby')
})

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
})

app.get('/tony-montana', (req, res) => {
    res.send('Say hello to my little friend')
})

app.get('/rocky', (req, res) => {
    res.send('Yo, Adrian')
})

app.get('/regis', (req, res) => {
    res.send('Is that your final answer?')
})

app.get('/regina', (req, res) => {
    res.send('whats up')
})

app.get('/lavander', (req, res) => {
    res.send('whats your fav scent?')
})

app.get('/reg', (req, res) => {
    res.send('how you doing?')
})

app.get('/donald', (req, res) => {
    res.send('wtw')
})

app.get('/table', (req, res) => {
    res.send('tell me something idk')
})


app.get('/homer', (req, res) => {
    res.send('roll up')
})

app.get('/capricorn', (req, res) => {
    res.send('thats my sign')
})

app.get('/fav', (req, res) => {
    res.send('cheesee')
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

// app.listen(PORT, () => {
//     console.log(`listening for requests on port ${PORT}`)
// })

module.exports = app