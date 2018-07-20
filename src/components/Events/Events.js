"use strict"
import React, { Component } from "react"
import Moment from "moment"

/**
 *
 * @type {string | null}
 */
const items         = window.sessionStorage.getItem("data")

/**
 *
 * @type {string | null}
 */
const summary_items = window.sessionStorage.getItem("summary")

/**
 *
 * @type {Array}
 */
let times = []

/**
 *
 * @type {Array}
 */
let summaries = []

if(items !== null) {
    times = items.split(",")
}

if(summary_items !== null) {
    summaries = summary_items.split(",")
}

class Events extends Component {

    render() {
        return (
            <div>
                <ul>
                    { times.map((time, i) => {
                        const formatted = Moment(time).format("LL: hh:mm A")
                        return <div key={i}>
                            <h3><u><a href="/event-modal">{ summaries[i] }</a></u></h3>
                            <li>{ formatted }</li>
                        </div>
                    }) }
                </ul>
            </div>
        )
    }
}

export default Events