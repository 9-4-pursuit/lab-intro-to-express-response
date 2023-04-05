// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
const PORT = process.env.PORT || 3004;

// LISTEN
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
