// @flow
"use strict"
export const SET_LOGIN_EMAIL      : string = "SET_LOGIN_EMAIL"
export const SET_LOGIN_PASSWORD   : string = "SET_LOGIN_PASSWORD"
export const SET_LOGIN_HAS_ERROR  : string = "SET_LOGIN_HAS_ERROR"
export const SET_LOGIN_VISIBILITY : string = "SET_LOGIN_VISIBILITY"

type SetLoginEmailType = {
    type: string,
    login_email: string
}

export const setLoginEmail = (login_email : string) : SetLoginEmailType => {
    return {
        type: SET_LOGIN_EMAIL,
        login_email
    }
}

type SetLoginPasswordType = {
    type: string,
    login_password: string
}

export const setLoginPassword = (login_password : string) : SetLoginPasswordType => {
    return {
        type: SET_LOGIN_PASSWORD,
        login_password
    }
}

type SetLoginHasErrorType = {
    type: string,
    login_error: boolean
}

export const setLoginHasError = (login_error : boolean) : SetLoginHasErrorType => {
    return {
        type: SET_LOGIN_HAS_ERROR,
        login_error
    }
}

type SetLoginVisibilityType = {
    type: string,
    login_visible: boolean
}

export const setLoginVisibility = (login_visible : boolean) : SetLoginVisibilityType => {
    return {
        type: SET_LOGIN_VISIBILITY,
        login_visible
    }
}