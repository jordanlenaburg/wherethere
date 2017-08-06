import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "./components/header"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                 <Header />
                <h1>test</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));