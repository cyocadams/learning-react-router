"use strict"
// Third Party Packages
const express = require("express")
const router  = express.Router()

router.post("/login", async (req, res) => {
    try {
        // console.log(req.body)
        // console.log(req.body["username"])
        // console.log(req.body["password"])
        const event = global.events.map((event, i) => {
            return event.start.dateTime || event.start.date
        })
        console.log(event)
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ data: event }));
    } catch (err) {
        res.json({
            "error": "something went wrong"
        })
    }
})

module.exports = router