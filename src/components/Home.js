"use strict"
import React, { Component } from "react"
import Header from "./Header/Header.js"

class Home extends Component {
    render() {
        return(
            <div>
                <Header title="Hello React Router on Home!" />
            </div>
        )
    }
}

export default Home