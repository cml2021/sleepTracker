import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EntryDate({date, setDate}) {

    const onSetDate = (date) => {
        setDate(date);
    }

    return (
        <div>
            <h2>What night is this entry for?</h2>
            <DatePicker 
                selected={date} 
                onChange={onSetDate} 
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