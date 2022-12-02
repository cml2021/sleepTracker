import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EntryUptime({uptime, setUptime}) {

    const onSetUptime = (uptime) => {
        setUptime(uptime);
    }

    return (
        <div>
            <h2>What time did you get out of bed for the day?</h2>
            <DatePicker
                className="DatePicker"
                selected={uptime}
                onChange={onSetUptime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                popperPlacement="bottom"
            />
            <Button buttonText={"Next"}/>
        </div>
    )
};

export default EntryUptime;