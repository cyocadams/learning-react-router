"use strict"
import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import {Provider} from "react-redux"
import { configureStore } from "./store/configure"
import {BrowserRouter as Router, Route} from "react-router-dom"

// css
import "./components/Header/header.css"
import "./components/Login/login.css"
import "./components/Spinner/spinner.css"
import "./components/UpcomingEvents/upcomingevents.css"
import "./components/Events/events.css"

const store  = configureStore()
const root = document.getElementById("root")

if (root) {
    const renderApp = () => {
        render(
            <Provider store={store}>
                <Router>
                    <Route path={"/"} component={ App }/>
                </Router>
            </Provider>,
            root
        )
    }
    renderApp()
}