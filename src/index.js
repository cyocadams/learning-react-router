"use strict"
import React from "react"
import {render} from "react-dom"
import App from "./components/App"
import {Provider} from "react-redux"
import {BrowserRouter as Router, Route} from "react-router-dom"

// css
import "./components/Header/header.css"

const root = document.getElementById("root")

if (root) {
    const renderApp = () => {
        render(
            <Router>
                <Route path={"/"} component={ App }/>
            </Router>,
            root
        )
    }
    renderApp()
}