"use strict"
const express = require('express')
const router  = express.Router()

router.get("/", renderMain)
router.get("/home", renderMain)
router.get("/about", renderMain)
router.get("/event-modal", renderMain)

function renderMain(request, response) {
    response.render("root")
}

module.exports = router