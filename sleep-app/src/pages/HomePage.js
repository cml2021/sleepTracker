import React from "react";
import Header from "../components/Header";
import SleepImage from "../images/sleep.svg"

function HomePage () {

    const tabProps = [
        {
            "name": "Diary",
            "path": "/diary"
         }
    ]

    const buttonProps = {
        "text": "Log sleep",
        "path": "/diary",
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