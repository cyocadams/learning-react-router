"use strict"
import React, { Component } from "react"
import Moment from "moment"

const items         = window.sessionStorage.getItem("data")
const summary_items = window.sessionStorage.getItem("summary")
const times         = items.split(",")
const summaries     = summary_items.split(",")

class Events extends Component {
    render() {
        return (
            <div>
                <ul>
                    { times.map((time, i) => {
                        let formatted = Moment(time).format("LL: hh:mm A")
                        return <div>
                            <h3>{ summaries[i] }</h3>
                            <li key={i}>{ formatted }</li><br />
                        </div>
                    }) }
                </ul>
            </div>
        )
    }
}

export default Events