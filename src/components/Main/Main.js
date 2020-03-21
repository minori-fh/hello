import React from "react";
import "./main.css";

import About from "./About/About";
import Intro from "./Intro/Intro";
import Portfolio from "./Portfolio/Portfolio";

// class component
const Main = (props) => {

    if (props.introState) {
        return (
            <Intro />
        )
    } else if (props.aboutState) {
        return (
            <About />
        )
    } else if (props.portState) {
        return (
            <Portfolio />
        )
    }
};
export default Main;