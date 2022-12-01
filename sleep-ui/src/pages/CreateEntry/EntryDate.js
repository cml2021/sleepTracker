import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EntryDate({date, setDate}) {

    return (
        <div>
            <h2>What night is this entry for?</h2>
            // TODO fix why not selecting date
            <DatePicker 
                selected={date} 
                onChange={(e) => setDate(e.target.value)} 
                popperPlacement="bottom"
                className="DatePicker"
            />
            <Button 
                buttonText={"Next"} 
                buttonPath={"/entry-bedtime"}
            />
        </div>
    )
};

export default EntryDate;