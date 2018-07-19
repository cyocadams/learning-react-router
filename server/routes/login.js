"use strict"
// Third Party Packages
const express = require("express")
const router  = express.Router()

router.post("/login", async (req, res) => {
    try {
        const event = global.events.map((event, i) => {
            return event.start.dateTime || event.start.date
        })

        const summary = global.events.map((event, i) => {
            return event.summary
        })

        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({ data: event, summary: summary }))

    } catch (err) {
        res.json({
            "error": "something went wrong"
        })
    }
})

module.exports = router