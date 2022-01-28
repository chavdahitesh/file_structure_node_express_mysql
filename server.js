const express = require("express");
const cors = require("cors");
require("dotenv").config({ override: true, multiline: true });
const app = express()
const errorHandler = require('./app/middleware/error-handler.js')

//CORS setting
var corsOptions = {
  origin: "*", // * means all, we can define url here
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/", (req, res) => {
  res.json({ message: `Welcome to ${process.env.APP_TITLE} application ` });
});
require('./app/routes/tutorial.routes.js')(app) // tutorial routes


// global error handler
app.use(errorHandler);

// set port, listen for requests
let PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
