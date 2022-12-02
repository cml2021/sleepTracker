import React, { useState, useEffect } from "react";
import Button from "../../ui-components/Button";
import DurationInput from "../../ui-components/DurationInput";

function EntrySleepDelay({ setSleepdelay }) {

    const [delayHours, setDelayHours] = useState("00");
    const [delayMin, setDelayMin] = useState("00");
    const [isValidHour, setIsValidHour] = useState(true);
    const [isValidMin, setIsValidMin] = useState(true);

    const parseDelay = () => {
        const hours = parseInt(delayHours);
        const hoursToMin = hours * 60;
        const min = parseInt(delayMin);
        const totalDelay = hoursToMin + min;
        setSleepdelay(totalDelay);
    }

    useEffect( parseDelay, [delayHours, delayMin, setSleepdelay])

    return (
        <div>
            <h2>How long did it take you to fall asleep?</h2>
            <div className="input-div">
                <DurationInput unit={"hour"} duration={delayHours} setDuration={setDelayHours} setIsValid={setIsValidHour}/>
                <DurationInput unit={"min"} duration={delayMin}  setDuration={setDelayMin} setIsValid={setIsValidMin}/>
            </div>
            <Button active={isValidHour && isValidMin} buttonText={"Next"} buttonPath={"/entry-wake-frequency"}/>
        </div>
    )
};

export default EntrySleepDelay;