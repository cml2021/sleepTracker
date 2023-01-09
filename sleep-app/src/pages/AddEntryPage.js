import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../components/Header";
import DatePickerField from "../components/DatePickerField";

function AddEntryPage() {

    const tabProps = [
        {
            "name": "Diary",
            "path": "/diary"
        }
    ]

    const [date, setDate] = useState(new Date());   // entry date, defaults to today

    return (
        <div>
            <Header tabs={tabProps}/>
            <div id="add-entry-main">
                <h1>Add new diary entry</h1>
                <DatePickerField label={"Entry date"} date={date} setDate={setDate}/>
            </div>
        </div>
    )
}

export default AddEntryPage;