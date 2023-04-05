const app = require ("../app.js")

// DEPENDENCIES

// CONFIGURATION
const PORT = 3005

// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})
