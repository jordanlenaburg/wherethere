import React from "react";

class Header extends React.Component {
    render () {
        return (
            <nav class="navbar-inverse">
                <ul class="nav">
                    <li role="presentation"><a href=''>Home</a></li>
                    <li role="presentation"><a href=''>Trip Planner</a></li>
                    <li role="presentation"><a href=''>My trips</a></li>
                    <li role="presentation"><a href=''>Weather</a></li>
                </ul>
            </nav>
        )
    }
}

export default Header;