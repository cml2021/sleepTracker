import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import { getTime, add } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

function EntrySleeptime({ bedtime, sleeptime, setSleeptime, setWaketime }) {

    // constrains selectable sleeptime to times equal to or after the selected bedtime
    const filterBedtime = (time) => {
        const selectedSleeptime = new Date(time);
        return getTime(selectedSleeptime) >= getTime(bedtime);
    }

    const onSetSleeptime = (sleeptime) => {
        setSleeptime(sleeptime);
        setWaketime(add(sleeptime, {hours: 8}))
    }

    return (
        <div>
            <h2>What time did you try to go to sleep?</h2>
            <DatePicker
                className="DatePicker"
                selected={sleeptime}
                onChange={onSetSleeptime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                filterTime={filterBedtime}
                dateFormat="h:mm aa"
                popperPlacement="bottom"
            />
            <Button 
                buttonText={"Next"} 
                buttonPath={"/entry-sleepdelay"}
            />
        </div>
    )
}

export default EntrySleeptime;