import React, { useState } from "react";
import Button from "../../ui-components/Button";
import DurationInput from "../../ui-components/DurationInput";

function EntrySleepDelay({ sleepdelay, setSleepdelay }) {

    const [delayHours, setDelayHours] = useState("00");
    const [delayMin, setDelayMin] = useState("00");
    const [isValidHour, setIsValidHour] = useState(true);
    const [isValidMin, setIsValidMin] = useState(true);

    return (
        <div>
            <h2>How long did it take you to fall asleep?</h2>
            <div className="duration-div">
                <DurationInput unit={"hour"} duration={delayHours} setDuration={setDelayHours} setIsValid={setIsValidHour} />
                <DurationInput unit={"min"} duration={delayMin}  setDuration={setDelayMin} setIsValid={setIsValidMin}/>
            </div>
            <Button active={isValidHour && isValidMin} buttonText={"Next"}/>
        </div>
    )
};

export default EntrySleepDelay;