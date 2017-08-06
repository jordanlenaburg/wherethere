import React from "react";

class Header extends React.Component {
    render () {
        return (
            <navbar className="header">
                This is the header
                <div><a>link 1</a></div>
                <div><a>link 2</a></div>
                <div><a>link 3</a></div>
            </navbar>
        )
    }
}

export default Header;