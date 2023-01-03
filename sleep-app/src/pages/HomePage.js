import React from "react";
import Header from "../components/Header";
import SleepImage from "../images/sleep.svg"
import '../styles/App.css';

function HomePage () {

    const tabProps = [
        {
            "name": "Diary",
            "path": "/diary"
         }
    ]

    const buttonProps = {
        "text": "Log sleep",
        "path": "/add-entry",
        "active": true
    }

    return (
        <div>
            <Header tabs={tabProps} button={buttonProps}/>
            <div id="homepage-main">
                <img id="homepage-main-img" src={SleepImage} alt="sleeper" />
            </div>
        </div>
    )
}

export default HomePage;