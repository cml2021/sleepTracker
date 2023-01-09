import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerField ({label, date, setDate}) {

    return (
        <div>
            <p className="form-label">{label}</p>
            <DatePicker className="date-picker" selected={date} onChange={(date) => setDate(date)}/>
        </div>
    )
}

export default DatePickerField;
