"use strict"
import React from "react"

const Header = props => {
    return(
        <nav>
            <ul className="cf">
                <li><a href="#">Menu Item 1</a></li>
                <li><a className="dropdown" href="#">Menu Item 2</a>
                    <ul>
                        <li><a href="#">{ props.title }</a></li>
                        <li><a href="#">Sub-menu Item 2</a></li>
                        <li><a href="#">Sub-menu Item 3</a></li>
                    </ul>
                </li>
                <li><a href="#">Menu Item 3</a></li>
            </ul>
        </nav>

    )
}

export default Header