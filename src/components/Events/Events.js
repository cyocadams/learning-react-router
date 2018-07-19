"use strict"
import React, { Component } from "react"
import Moment from "moment"

const items = window.sessionStorage.getItem("data")
const times = items.split(",")
console.log(times)

class Events extends Component {
    render() {
        return (
            <div>
                <ul>
                    { times.map((time, i) => {
                        let formatted = Moment(time).format("LL: hh:mm A")
                        return <div><li key={i}>{ formatted }</li><br /></div>
                    }) }
                </ul>
            </div>
        )
    }
}

export default Events