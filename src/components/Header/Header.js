"use strict"
import React from "react"

const Header = props => {
    return(
        <nav>
            <ul className="cf">
                <li><a className="dropdown" href="#">Menu</a>
                    <ul>
                        <li><a href="#">{ props.title }</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

    )
}

export default Header