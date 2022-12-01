import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EntrySleeptime({ sleeptime, setSleeptime }) {
    // TODO: add validation to check that sleeptime >= bedtime
    return (
        <div>
            <h2>What time did you try to go to sleep?</h2>
            <DatePicker
                className="DatePicker"
                selected={sleeptime}
                onChange={(sleeptime) => setSleeptime(sleeptime)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                popperPlacement="bottom"
            />
            <Button buttonText={"Next"} />
        </div>
    )
}

export default EntrySleeptime;