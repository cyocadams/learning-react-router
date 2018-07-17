"use strict"
import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import { Provider } from "react-redux"
import "./components/Header/header.css"
import { BrowserRouter as Router, Route, browserHistory } from "react-router-dom"

const root = document.getElementById("root")
if(root) {
    const renderApp = () => {
        render(
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
            </Router>,
            root
        )
    }
    renderApp()
}