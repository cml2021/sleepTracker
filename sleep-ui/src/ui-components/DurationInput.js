import React, {useState} from "react";

function DurationInput({unit, duration, setDuration, setIsValid}) {

    const [isValidField, setIsValidField] = useState(true)

    const onSetDurationHour = (e) => {
        // validate hh input is an integer in [0, 23]
        let hours = e.target.value;
        let hoursInt = parseInt(hours);
        const regex = /^\d+$/
        
        // show feedback if input is invalid
        if (regex.test(hours) === false || hoursInt > 23) {
            setIsValidField(false);
            setIsValid(false);
        } else {
            if (hours.length === 1) {
                hours = "0" + hours;
            }
            setDuration(hours);
            setIsValidField(true);
            setIsValid(true);
        }
    };

    const onSetDurationMin = (e) => {
        // validate mm input is an integer in [0, 59]
        let min = e.target.value;
        let minInt = parseInt(min);
        const regex = /^\d+$/

        // show feedback if input is invalid
        if (regex.test(min) === false || minInt > 59) {
            setIsValidField(false);
            setIsValid(false);
        } else {
            if (min.length === 1) {
                min = "0" + min;
            }
            setDuration(min);
            setIsValidField(true);
            setIsValid(true);
        }
    }

    if (unit === "hour") {
        return (
            <div className="duration-input-div">
                <input 
                    type="string" 
                    defaultValue={duration} 
                    className={isValidField === true ? "duration-input" : "duration-input-invalid"}
                    onChange={onSetDurationHour}
                />
                <label>hh</label>
            </div>
        )
    } else if (unit === "min") {
        return (
            <div className="duration-input-div">
                <input 
                    type="string" 
                    defaultValue={duration} 
                    className={isValidField === true ? "duration-input" : "duration-input-invalid"}
                    onChange={onSetDurationMin}
                />
                <label>mm</label>
            </div>
        )
    }
};

export default DurationInput;