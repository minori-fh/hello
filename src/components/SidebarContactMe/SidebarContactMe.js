import React from "react";

import "./sidebar.css"

import MailLogo from "./mail.png";
import LinkedInLogo from "./linkedin.png";
import GithubLogo from "./github.png";

const SidebarContactMe = () => (
    <div className="sidebar">
        <img className="contactLogo" src={MailLogo}/>
        <img className="contactLogo" src={LinkedInLogo}/>
        <img className="contactLogo" src={GithubLogo}/>
    </div>
);

export default SidebarContactMe; 