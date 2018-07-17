"use strict"
import React from "react"
import {render} from "react-dom"
import App from "./components/App"
import Home from "./components/Home"
import {Provider} from "react-redux"
import "./components/Header/header.css"
import {BrowserRouter as Router, Route} from "react-router-dom"

const root = document.getElementById("root")

if (root) {
    const renderApp = () => {
        render(
            <Router>
                <Route path={"/"} component={App}/>
            </Router>,
            root
        )
    }
    renderApp()
}