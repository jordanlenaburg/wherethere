import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "./components/header"
import LoginPage from "./components/login"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <h1>Where, there?</h1>
                <LoginPage />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));