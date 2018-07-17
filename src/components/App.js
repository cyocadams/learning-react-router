"use strict"
import React, { Component } from "react"
import Header from "./Header/Header.js"
import Login from "./Login/Login.js"
import { Route, Link} from "react-router-dom"

class App extends Component {
    render() {
        return [
            /*<Link key={"one"} to={"/about"}>I always get rendered</Link>,*/
            /*<Route key={"index"} exact path="/" render={() =><Header title="Index" />} />,*/
            <Route key={"index"} exact path="/" render={() => <Login />} />,
            <Route key={"home"} exact path="/home" render={() => <Header title="Home" />} />,
            <Route key={"about"} exact path="/about" render={() => <Header title="About" />} />
        ]
    }
}

export default App