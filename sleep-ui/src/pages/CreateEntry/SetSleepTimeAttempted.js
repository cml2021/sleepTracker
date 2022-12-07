import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import { getTime, add } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

function SetSleepTimeAttempted({ timeIntoBed, timeSleepAttempted, setTimeSleepAttempted, setTimeFinalAwakening }) {

    // constrains selectable sleeptime to times equal to or after the selected bedtime
    const filterBedtime = (time) => {
        const selectedSleeptime = new Date(time);
        return getTime(selectedSleeptime) >= getTime(timeIntoBed);
    }

    const onSetSleeptime = (timeSleepAttempted) => {
        setTimeSleepAttempted(timeSleepAttempted);
        setTimeFinalAwakening(add(timeSleepAttempted, {hours: 8}))
    }

    return (
        <div className="container">
            <div className="title">
                <h2>What time did you try to go to sleep?</h2>
            </div>
            <div className="input">
            <DatePicker
                className="DatePicker"
                selected={timeSleepAttempted}
                onChange={onSetSleeptime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                filterTime={filterBedtime}
                dateFormat="h:mm aa"
                popperPlacement="bottom"
            />
            </div>
            
            <Button 
                buttonText={"Next"} 
                buttonPath={"/new-entry/sleep-delay"}
            />
        </div>
    )
}

export default SetSleepTimeAttempted;