import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EntryBedtime({date, setBedtime}) {
    return (
        <div>
            <h2>What time did you get into bed?</h2>
            <DatePicker 
                className="DatePicker"
                selected={date}
                onChange={(e) => setBedtime(e.target.value)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                popperPlacement="bottom"
            />
            <Button buttonText={"Next"}/>
        </div>
    )
}

export default EntryBedtime;