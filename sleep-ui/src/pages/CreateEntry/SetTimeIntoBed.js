import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import { add, getDate, getHours } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

function SetTimeIntoBed({ date, timeIntoBed, setTimeIntoBed, setTimeSleepAttempted }) {

    // Sets timeIntoBed and adjusts timeIntoBed date based on whether timeIntoBed is AM/PM. Also sets sleeptime to same as timeIntoBed
    const onSetBedtime = (timeIntoBed) => {

        // Bedtime in PM
        if (getHours(timeIntoBed) >= 12) {
            // If timeIntoBed date matches entry date, no date adjustment is required
            if (getDate(timeIntoBed) === getDate(date)) {
                setTimeIntoBed(timeIntoBed);
                setTimeSleepAttempted(timeIntoBed);
            } else {
                // If timeIntoBed date does not match entry date, adjust timeIntoBed date to match
                const adjustedBedtime = add(timeIntoBed, { days: -1 });
                setTimeIntoBed(adjustedBedtime);
                setTimeSleepAttempted(adjustedBedtime);
            }
        } else {
            // Bedtime in AM
            // If timeIntoBed date matches entry date, adjust timeIntoBed date to next day
            if (getDate(timeIntoBed) === getDate(date)) {
                const adjustedBedtime = add(timeIntoBed, { days: 1 })
                setTimeIntoBed(adjustedBedtime);
                setTimeSleepAttempted(adjustedBedtime);
            } else {
                // If timeIntoBed date does not match entry date, no date adjustment is required
                setTimeIntoBed(timeIntoBed);
                setTimeSleepAttempted(timeIntoBed);
            }
        }
    };

    return (
        <div className="container">
            <div className="title">
                <h2>What time did you get into bed?</h2>
            </div>
            <div className="input">
            <DatePicker
                className="DatePicker"
                selected={timeIntoBed}
                onChange={onSetBedtime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                popperPlacement="bottom"
            />
            </div>
            
            <Button
                buttonText={"Next"}
                buttonPath={"/new-entry/time-sleep-attempted"}
            />
        </div>
    )
};

export default SetTimeIntoBed;