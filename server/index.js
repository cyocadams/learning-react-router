"use strict"

// Core node modules
const bodyParser    = require("body-parser")
const cookieParser  = require("cookie-parser")
const path          = require("path")
const fs            = require("fs")
const readline      = require("readline")

// Third party packages
const express       = require("express")
const app           = express()
const expressValidator = require("express-validator")

const { google }    = require("googleapis")

// If modifying these scopes, delete credentials.json.
const SCOPES        = ["https://www.googleapis.com/auth/calendar.readonly"]
const TOKEN_PATH    = "../token.json"

// Routes
const root          = require("./routes/root")
const login         = require("./routes/login")

// View engine setup
app.set("views", path.join(__dirname, "./views"))
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
app.use(express.static(path.join(__dirname, "../public"), {maxAge: 86400000 }))

app.use(root)
app.use(login)

// Node server
app.set("port", (process.env.PORT || 8000))
app.listen(app.get("port"), function() {
    console.log("Server started on port "+ app.get("port"))
})

// Load client secrets from a local file.
fs.readFile('../credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Calendar API.
    authorize(JSON.parse(content), listEvents);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getAccessToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return callback(err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth) {
    const calendar = google.calendar({version: 'v3', auth})
    calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: 100,
        singleEvents: true,
        orderBy: 'startTime',
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err)
        const events = res.data.items
        console.log(events)
        global.events = events

        if(events.length === 0) {
            console.log("No upcoming events found.")
        }
    })
}