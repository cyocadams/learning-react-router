"use strict"
import React, { Component } from "react"
import Header from "./Header/Header.js"
import { Route, Link} from "react-router-dom"

const Test = () => <h1>Test</h1>

const About = () => <h1>About</h1>

class App extends Component {
    render() {
        return [
            /*<Link key={"one"} to={"/about"}>I always get rendered</Link>,*/
            <Route key={"index"} exact path="/" render={() =><Header title="Welcome to React Routing!"/>} />,
            <Route key={"home"} exact path="/home" component = { Test } />,
            <Route key={"about"} exact path="/about" component={ About } />
        ]
    }
}

export default App