import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SetTimeOutOfBed({timeOutOfBed, setTimeOutOfBed}) {

    const onSetUptime = (timeOutOfBed) => {
        setTimeOutOfBed(timeOutOfBed);
    }

    return (
        <div className="container">
            <div className="title">
                <h2>What time did you get out of bed for the day?</h2>
            </div>
            <DatePicker
                className="DatePicker"
                selected={timeOutOfBed}
                onChange={onSetUptime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                popperPlacement="bottom"
            />
            <Button buttonText={"Next"} buttonPath={"/new-entry/quality-rating"}/>
        </div>
    )
};

export default SetTimeOutOfBed;