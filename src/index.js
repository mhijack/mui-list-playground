import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";
import "./styles.css";

function Container() {
    return (
        <div className="App">
            <App />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Container />, rootElement);
