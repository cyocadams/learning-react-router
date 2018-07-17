"use strict"
import React from "react"

const Header = props => {
    return(
        <div>
            <h1 className="header-styles">{ props.title }</h1>
        </div>
    )
}

export default Header