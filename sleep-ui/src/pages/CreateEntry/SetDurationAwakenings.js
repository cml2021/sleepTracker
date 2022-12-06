import React, {useState, useEffect} from "react";
import DurationInput from "../../ui-components/DurationInput";
import Button from "../../ui-components/Button";

function SetDurationAwakenings({setDurationAwakenings}) {

    const [awakeHours, setAwakeHours] = useState("00");
    const [awakeMin, setAwakeMin] = useState("00");
    const [isValidHour, setIsValidHour] = useState(true);
    const [isValidMin, setIsValidMin] = useState(true);

    const parseDelay = () => {
        const hours = parseInt(awakeHours);
        const hoursToMin = hours * 60;
        const min = parseInt(awakeMin);
        const totalDuration = hoursToMin + min;
        setDurationAwakenings(totalDuration);
    }

    useEffect( parseDelay, [awakeHours, awakeMin, setDurationAwakenings])

    return (
        <div className="container">
            <div className="title">
                <h2>In total, how long did these awakenings last?</h2>
            </div>
            <div className="input">
            <div className="input-div">
                <DurationInput unit={"hour"} duration={awakeHours} setDuration={setAwakeHours} setIsValid={setIsValidHour}/>
                <DurationInput unit={"min"} duration={awakeMin}  setDuration={setAwakeMin} setIsValid={setIsValidMin}/>
            </div>
            </div>
            
            <Button active={isValidHour && isValidMin} buttonText={"Next"} buttonPath={"/new-entry/time-final-awakening"}/>
        </div>
    )
};

export default SetDurationAwakenings;