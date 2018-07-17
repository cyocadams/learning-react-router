"use strict"
import React, {Component} from "react"
import Header from "./Header/Header.js"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const Test = () => <h1>Test</h1>

const About = () => <h1>About</h1>

class App extends Component {
    render() {
        return [
            <Link key={"one"} to={"/about"}>I always get rendered</Link>,
            <Route key={"two"} exact path = "/home" component = {Test}/>,
            <Route key={"three"} exact path="/about" component={About}/>
        ]
    }
}

export default App