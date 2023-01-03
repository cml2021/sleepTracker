import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import Button from "./Button";

function Header({tabs, button}) {

    const navigate = useNavigate();

    const headerTabs = tabs.map((tab, i) =>
        <div className="tab" key={i} onClick={() => navigate(tab.path)}>
            {tab.name}
        </div>
    )
    
    return (
        <div className="header">
            <h1>sleepTracker</h1>
            <div className="tab-set">{headerTabs}</div>
            <Button text={button.text} path={button.path} active={button.active}/>
        </div>
    )
}

export default Header;