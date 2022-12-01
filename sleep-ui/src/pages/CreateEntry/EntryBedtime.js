import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import { add, getDate, getHours } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

function EntryBedtime({ date, bedtime, setBedtime, setSleeptime }) {

    // Sets bedtime and adjusts bedtime date based on whether bedtime is AM/PM. Also sets sleeptime to same as bedtime
    const onSetBedtime = (bedtime) => {

        // Bedtime in PM
        if (getHours(bedtime) >= 12) {
            // If bedtime date matches entry date, no date adjustment is required
            if (getDate(bedtime) === getDate(date)) {
                setBedtime(bedtime);
                setSleeptime(bedtime);
            } else {
                // If bedtime date does not match entry date, adjust bedtime date to match
                const adjustedBedtime = add(bedtime, { days: -1 });
                setBedtime(adjustedBedtime);
                setSleeptime(adjustedBedtime);
            }
        } else {
            // Bedtime in AM
            // If bedtime date matches entry date, adjust bedtime date to next day
            if (getDate(bedtime) === getDate(date)) {
                const adjustedBedtime = add(bedtime, { days: 1 })
                setBedtime(adjustedBedtime);
                setSleeptime(adjustedBedtime);
            } else {
                // If bedtime date does not match entry date, no date adjustment is required
                setBedtime(bedtime);
                setSleeptime(bedtime);
            }
        }
    };

    return (
        <div>
            <h2>What time did you get into bed?</h2>
            <DatePicker
                className="DatePicker"
                selected={bedtime}
                onChange={onSetBedtime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                popperPlacement="bottom"
            />
            <Button
                buttonText={"Next"}
                buttonPath={"/entry-sleeptime"}
            />
        </div>
    )
};

export default EntryBedtime;