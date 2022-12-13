import React from "react";
import "../styles/Header.css";
import Button from "./Button";

function Header ({tabs, button}) {

    const headerTabs = tabs.map((tab, i) =>
        <div className="tab" key={i} path={tab.path} onClick={() => alert(`Opens ${tab.path}`)}>
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