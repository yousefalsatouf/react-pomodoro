import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./style.scss";


let mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
