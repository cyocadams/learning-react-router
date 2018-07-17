"use strict"
import React, { Component } from "react"
import { connect } from "react-redux"
import {
    setLoginEmail,
    setLoginPassword,
    setLoginHasError,
    setLoginVisibility
} from "../../actions/login"

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
                  setLoginEmail,
                  setLoginPassword,
                  setLoginVisibility,
                  setTopBarVisibility,
                  setWhySignUpVisibility,
                  setRegistrationFormVisibility,
                  setForumDiscussionVisibility,
                  login_email,
                  login_password
              } = this.props

        return (
              <div>
                  <div className="logo"></div>
                  <div className="login-block">
                      <h1>Login</h1>
                      <input
                          type="text"
                          placeholder="Username"
                          id="username"
                          onChange={event => {
                              setLoginEmail(event.target.value)
                          }}
                      />
                      <input
                          type="password"
                          placeholder="Password"
                          id="password"
                          onChange={event => {
                              setLoginPassword(event.target.value)
                          }}
                      />
                      <button
                          onClick={event => {
                              // do stuff
                          }} >
                          Submit
                      </button>
                  </div>
              </div>
        )
    }
}

type LoginType = {
    login_email: string,
    login_password: string,
    setLoginEmail: Function,
    setLoginPassword: Function,
    setLoginVisibility: Function
}

const mapStateToProps = state => ({
    login_email: state.login.login_email,
    login_password: state.login.login_password,
    login_visible: state.login.login_visible
})

const mapDispatchToProps = dispatch => ({
    setLoginEmail: login_email => {
        dispatch(setLoginEmail(login_email))
    },
    setLoginPassword: login_password => {
        dispatch(setLoginPassword(login_password))
    },
    setLoginHasError: login_error => {
        dispatch(setLoginHasError(login_error))
    },
    setLoginVisibility: login_visible => {
        dispatch(setLoginVisibility(login_visible))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)