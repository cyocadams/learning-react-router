"use strict"

// Core node modules
const bodyParser    = require("body-parser")
const cookieParser  = require("cookie-parser")
const path          = require("path")

// Third party packages
const express       = require("express")
const app           = express()
const expressValidator = require("express-validator")

// Routes
const home          = require("./server/routes/home") // Route for rendering the main home page

// View engine setup
app.set("views", path.join(__dirname, "./server/views"))
app.set("view engine", "ejs")

// Express Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        let namespace = param.split(".")
            , root = namespace.shift()
            , formParam = root;
        while(namespace.length) {
            formParam += "[" + namespace.shift() + "]"
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        }
    }
}))

// BodyParser Middleware
app.use(bodyParser.json()) // Support json encoded bodies.
app.use(bodyParser.urlencoded({ // Support encoded bodies.
    extended: true
}))
app.use(cookieParser())

// Set static folder
app.use(express.static(path.join(__dirname, "src"), {maxAge: 86400000 }))

app.use(home)

// Node server
app.set("port", (process.env.PORT || 8000))
const server = app.listen(app.get("port"), function() {
    console.log("Server started on port "+ app.get("port"))
})