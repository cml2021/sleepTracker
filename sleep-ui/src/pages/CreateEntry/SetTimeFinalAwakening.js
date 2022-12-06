import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SetTimeFinalAwakening({timeFinalAwakening, setTimeFinalAwakening, setTimeOutOfBed}) {

    const onSetWaketime = (timeFinalAwakening) => {
        setTimeFinalAwakening(timeFinalAwakening);
        setTimeOutOfBed(timeFinalAwakening);
    }

    return (
        <div>
            <h2>What time was your final awakening?</h2>
            <DatePicker
                className="DatePicker"
                selected={timeFinalAwakening}
                onChange={onSetWaketime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                popperPlacement="bottom"
            />
            <Button buttonText={"Next"} buttonPath={"/new-entry/time-out-of-bed"}/>
        </div>
    )
};

export default SetTimeFinalAwakening;