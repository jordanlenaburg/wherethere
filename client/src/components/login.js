import React from 'react';

export class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
            </div>
        )
    }
}