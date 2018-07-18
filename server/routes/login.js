"use strict"
// Third Party Packages
const express = require("express")
const router  = express.Router()

router.post("/login", async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.body["username"])
        console.log(req.body["password"])
        res.json({"success": "successfully processed!"})
    } catch (err) {
        res.json({
            "error": "something went wrong"
        })
    }
})

module.exports = router