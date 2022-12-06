import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SetDate({date, setDate}) {

    const onSetDate = (date) => {
        setDate(date);
    }

    return (
        <div className="container">
            <div className="title">
                <h2>What night is this entry for?</h2>
            </div> 
            <div className="input">
                <DatePicker 
                selected={date} 
                onChange={onSetDate} 
                popperPlacement="bottom"
                className="DatePicker"
                />
            </div>
            <Button 
                buttonText={"Next"} 
                buttonPath={"/new-entry/time-into-bed"}
            />
        </div>
    )
};

export default SetDate;