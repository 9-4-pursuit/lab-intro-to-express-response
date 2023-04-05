// -----DEPENDANCIES-----

const app = require("../app")

// -----CONFIGURATION-----
const PORT = 3003

// -----LISTEN-----
app.listen(PORT, () => {
    console.log(`waiting for yonce on port ${PORT}`)
})