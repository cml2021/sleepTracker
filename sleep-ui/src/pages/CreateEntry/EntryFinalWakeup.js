import React from "react";
import Button from "../../ui-components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EntryFinalWakeup({waketime, setWaketime, setUptime}) {

    const onSetWaketime = (waketime) => {
        setWaketime(waketime);
        setUptime(waketime);
    }

    return (
        <div>
            <h2>What time was your final awakening?</h2>
            <DatePicker
                className="DatePicker"
                selected={waketime}
                onChange={onSetWaketime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                popperPlacement="bottom"
            />
            <Button buttonText={"Next"} buttonPath={"/entry-final-up"}/>
        </div>
    )
};

export default EntryFinalWakeup;