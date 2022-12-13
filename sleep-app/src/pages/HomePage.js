import React from "react";
import Header from "../components/Header";

function HomePage () {

    const tabs = [
        {
            "name": "Diary",
            "path": "/diary"
         }
    ]

    const button = {
        "text": "Log sleep",
        "path": "/diary"
    }

    return (
        <Header tabs={tabs} button={button}/>
    )
}

export default HomePage;