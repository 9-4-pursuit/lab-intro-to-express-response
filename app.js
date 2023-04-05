const express = require('express')
const app = express()
const PORT = 3003

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

  app.get('/magic8',(req,res)=>{
    res.send(`<h1>${magic8Responses[Math.floor(Math.random() * 19)]}</h1>`)
  })

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/terminator', (req,res)=>{
    res.send("I'll be back")
    // res.send('Hasta la vista, baby')
})
app.get('/tim-gunn',(req,res)=>{
    res.send('Make it work')
})
app.get('/emeril',(req,res)=>{
    res.send('Bam!')
})
app.get('/jj-evans',(req,res)=>{
    res.send('Dy-no-myte!')
})
app.get('/fraiser',(req,res)=>{
    res.send('I\'m listening')
})
app.get('/batman',(req,res)=>{
    res.send('To the Batmobile!')
})
app.get('/regis',(req,res)=>{
    res.send('Is that your final answer?')
})
app.get('/Borg',(req,res)=>{
    res.send('Resistance is futile')
})
app.get('/Bruce-banner',(req,res)=>{
    res.send('Don\'t make me angry')
})


app.listen(PORT, ()=>{
    console.log('App is listening on port', PORT)
})