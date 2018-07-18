"use strict"
// Third Party Packages
const express = require("express")
const router  = express.Router()

router.post("/login", async (req, res) => {
    try {
        const keys_array = Object.keys(req.body)
        const properties = JSON.parse(keys_array[0])

        console.log(properties)
        res.json("success!")
    } catch (err) {
        res.json({
            "error": "something went wrong"
        })
    }
})

module.exports = router