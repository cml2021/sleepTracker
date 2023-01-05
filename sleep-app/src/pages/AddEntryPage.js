import React from "react";
import Header from "../components/Header";

function AddEntryPage() {

    const tabProps = [
        {
            "name": "Diary",
            "path": "/diary"
        }
    ]

    return (
        <div>
            <Header tabs={tabProps}/>
            <div id="add-entry-main">
                <h1>Add new diary entry</h1>
            </div>
        </div>
    )
}

export default AddEntryPage;