"use strict"
import React, { Component } from "react"
import Header from "./Header/Header.js"
import { BrowserRouter as Router, Route } from "react-router-dom"

const Test = () => <h1>Test</h1>

const About = () => <h1>About</h1>

class App extends Component {
    render()
    {
        return (
            <Router>
                <div>
                    <Route path="/" component={ Test } />
                    <Route path="/about" component={ About } />
                </div>
            </Router>
        )
    }



}

export default App