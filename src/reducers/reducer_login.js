// @flow
"use strict"
import {
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
    SET_LOGIN_HAS_ERROR,
    SET_LOGIN_VISIBILITY,
    SET_SPINNER_VISIBILITY
} from "../actions/login";

type InitialStateType = {
    login_email: string,
    login_password: string,
    login_has_error: boolean,
    login_visible: boolean,
    spinner_visible: boolean
}

type ActionType = {
    type: string,
    login_email: string,
    login_password: string,
    login_has_error: boolean,
    login_visible: boolean,
    spinner_visible: boolean
}

const initial_state : InitialStateType = {
    login_email: "",
    login_password: "",
    login_has_error: false,
    login_visible: true,
    spinner_visible: false
}

export const login_form = (state : InitialStateType = initial_state, action : ActionType) : Object => {
    switch(action.type) {
        case SET_LOGIN_EMAIL:
            return {
                ...state,
                login_email: action.login_email,
            }
        case SET_LOGIN_PASSWORD:
            return {
                ...state,
                login_password: action.login_password
            }
        case SET_LOGIN_HAS_ERROR:
            return {
                ...state,
                login_has_error: action.login_has_error
            }
        case SET_LOGIN_VISIBILITY:
            return {
                ...state,
                login_visible: action.login_visible
            }
        case SET_SPINNER_VISIBILITY:
            return {
                ...state,
                spinner_visible: action.spinner_visible
            }
        default:
            return state
    }
}