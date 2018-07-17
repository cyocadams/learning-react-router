// @flow
"use strict"
import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "./Header/Header.js"
import Login from "./Login/Login.js"
import { Route, Link} from "react-router-dom"

class App extends Component<AppProps, void> {
    render() {
        const login_visible = this.props.login_visible

        return [
            /*<Link key={"one"} to={"/about"}>I always get rendered</Link>,*/
            /*<Route key={"index"} exact path="/" render={() =><Header title="Index" />} />,*/
            <Route key={"index"} exact path="/" render={() => login_visible ? <Login /> : null } />,
            <Route key={"home"} exact path="/home" render={() => <Header title="Home" /> } />,
            <Route key={"about"} exact path="/about" render={() => <Header title="About" />} />
        ]
    }
}

type AppProps = {
    login_visible: boolean,
    registration_form_visible: boolean,
    why_sign_up_visible: boolean,
    top_bar_visible: boolean,
    forum_discussion_visible: boolean

}

const mapStateToProps = (state : Object) : AppProps => {
    return {
        login_visible: state.login.login_visible
    }
}

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)