"use strict"
import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

import { login_form } from "../reducers/reducer_login"

export const configureStore = () => {
    const reducers = combineReducers({
        login: login_form,
    })

    return createStore(
        reducers,
        getMiddleware(),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

function getMiddleware() {
    if(process.env.NODE_ENV === "development") {
        const dev_tools = window.devToolsExtension ? window.devToolsExtension() : f => f
        return compose(applyMiddleware(thunk, logger), dev_tools)
    }

    return compose(applyMiddleware(thunk))
}