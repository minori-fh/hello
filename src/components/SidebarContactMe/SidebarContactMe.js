import React from "react";
import "./sidebar.css"

import MailLogo from "./mail.png";
import LinkedInLogo from "./linkedin.png";
import GithubLogo from "./github.png";

// functional component
const SidebarContactMe = () => (
    <div className="sidebar">
        <a href="mailto:minori.fh@gmail.com"><img className="contactLogo" src={MailLogo}/></a>
        <a href="https://linkedin.com/in/minorifh" target="_blank"><img className="contactLogo linkedin" src={LinkedInLogo}/></a>
        <a href="https://github.com/minori-fh" target="_blank"><img className="contactLogo" src={GithubLogo}/></a>
    </div>
);

export default SidebarContactMe; 