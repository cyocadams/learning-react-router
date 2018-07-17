"use strict"
const express = require('express')
const router  = express.Router()

router.get("/about", function(req, res) {
    res.send("hello")
})

module.exports = router