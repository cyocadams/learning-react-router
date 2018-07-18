"use strict"
import React, { Component } from "react"
import { connect } from "react-redux"
import {
    setLoginEmail,
    setLoginPassword,
    setLoginHasError,
    setLoginVisibility
} from "../../actions/login"
import Error from "../Error/Error"

class Login extends Component {
    constructor(props) {
        super(props)
    }

    getUsernameInput() {
        return this.props.login_email.length > 1
    }

    getPasswordInput() {
        return this.props.login_password.length > 1
    }

    render() {
        const {
                  setLoginEmail,
                  setLoginPassword,
                  setLoginVisibility,
                  setLoginHasError,
                  login_email,
                  login_password,
                  login_has_error
              } = this.props

        return (
              <div>
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
                      { login_has_error ? <Error /> : null }
                      <input
                          type="password"
                          placeholder="Password"
                          id="password"
                          onChange={event => {
                              setLoginPassword(event.target.value)
                          }}
                      />
                      <button
                          onClick={() => {
                              if(this.getUsernameInput() && this.getPasswordInput()) {
                                  setLoginVisibility(false)
                                  location.href='/home'
                              } else {
                                  setLoginHasError(true)
                              }
                          }} >
                          Submit
                      </button>
                  </div>
              </div>
        )
    }
}

const mapStateToProps = state => ({
    login_email: state.login.login_email,
    login_password: state.login.login_password,
    login_visible: state.login.login_visible,
    login_has_error: state.login.login_has_error
})

const mapDispatchToProps = dispatch => ({
    setLoginEmail: login_email => {
        dispatch(setLoginEmail(login_email))
    },
    setLoginPassword: login_password => {
        dispatch(setLoginPassword(login_password))
    },
    setLoginHasError: login_has_error => {
        dispatch(setLoginHasError(login_has_error))
    },
    setLoginVisibility: login_visible => {
        dispatch(setLoginVisibility(login_visible))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)