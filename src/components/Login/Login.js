"use strict"
import React, { Component } from "react"
import axios from "axios"

import { connect } from "react-redux"
import {
    setLoginEmail,
    setLoginPassword,
    setLoginHasError,
    setLoginVisibility,
    setSpinnerVisibility
} from "../../actions/login"
import Error from "../Error/Error"
import Spinner from "../Spinner/Spinner"

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

    handleSubmit() {
        event.preventDefault()

        const username = {
            name: this.props.login_email
        }

        const pass = {
            password: this.props.login_password
        }

        axios.post("/login", {
            username: username.name,
            password: pass.password,
        })
            .then(function (response) {
                const info = response.data
                console.log(info.data[0])
                setLoginVisibility(false)
                location.href='/home'
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        const {
                  setLoginEmail,
                  setLoginPassword,
                  setLoginHasError,
                  setSpinnerVisibility,
                  login_has_error,
                  spinner_visible
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
                                  setSpinnerVisibility(true)
                                  this.handleSubmit()
                              } else {
                                  setLoginHasError(true)
                              }
                          }} >
                          Submit
                      </button>
                      { spinner_visible ? <Spinner /> : null }
                  </div>
              </div>
        )
    }
}

const mapStateToProps = state => ({
    login_email: state.login.login_email,
    login_password: state.login.login_password,
    login_visible: state.login.login_visible,
    login_has_error: state.login.login_has_error,
    spinner_visible: state.login.spinner_visible
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
    },
    setSpinnerVisibility: spinner_visible => {
        dispatch(setSpinnerVisibility(spinner_visible))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)