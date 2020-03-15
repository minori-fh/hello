import React from "react";
import "./nav.css";

// functional component
const Nav = (props) => (
    <div className="nav">
        <p className="portfolio" onClick={props.portfolio} style={{color: props.portState ? "black" : "grey"}}>portfolio</p>
        <p className="about" onClick={props.about} style={{color: props.aboutState ? "black" : "grey"}}>about</p>
    </div>
);

export default Nav;