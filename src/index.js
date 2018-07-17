"use strict"
import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import Home from "./components/Home"
import { Provider } from "react-redux"
import "./components/Header/header.css"
import { BrowserRouter as Router, Route, browserHistory } from "react-router-dom"

const root = document.getElementById("root")
const home = document.getElementById("home")
if(root) {
    const renderApp = () => {
        render(
            <Router history={browserHistory}>
                <Route path="/" component={ App }/>
            </Router>,
            root
        )
    }
    renderApp()
}

if(home) {
    const renderApp = () => {
        render(
                <Router history={browserHistory}>
                    <Route path="/home" component={ Home }/>
                </Router>,
            home
        )
    }
    renderApp()
}
else {
    console.log("Failed to lookup home node.  React cannot render App.")
}