import React from "react";
import "./nav.css";

// functional component
const Nav = (props) => (
    <div className="nav">
        <ul className="menu">
            <li className="about" onClick={props.about} style={{color: props.aboutState ? "black" : "grey"}}>ABOUT</li>
            <li className="portfolio" onClick={props.portfolio} style={{color: props.portState ? "black" : "grey"}}>PORTFOLIO</li>
        </ul>
    </div>
);

export default Nav;