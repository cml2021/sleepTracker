import React, {useState, useEffect} from "react";
import DurationInput from "../../ui-components/DurationInput";
import Button from "../../ui-components/Button";

function EntryWakeupDuration({setAwakeningsDuration}) {

    const [awakeHours, setAwakeHours] = useState("00");
    const [awakeMin, setAwakeMin] = useState("00");
    const [isValidHour, setIsValidHour] = useState(true);
    const [isValidMin, setIsValidMin] = useState(true);

    const parseDelay = () => {
        const hours = parseInt(awakeHours);
        const hoursToMin = hours * 60;
        const min = parseInt(awakeMin);
        const totalDuration = hoursToMin + min;
        setAwakeningsDuration(totalDuration);
    }

    useEffect( parseDelay, [awakeHours, awakeMin, setAwakeningsDuration])

    return (
        <div>
            <h2>In total, how long did these awakenings last?</h2>
            <div className="input-div">
                <DurationInput unit={"hour"} duration={awakeHours} setDuration={setAwakeHours} setIsValid={setIsValidHour}/>
                <DurationInput unit={"min"} duration={awakeMin}  setDuration={setAwakeMin} setIsValid={setIsValidMin}/>
            </div>
            <Button active={isValidHour && isValidMin} buttonText={"Next"} buttonPath={"/entry-final-wake"}/>
        </div>
    )
};

export default EntryWakeupDuration;