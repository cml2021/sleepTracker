import React from "react";
import Button from "../../ui-components/Button";
import NumberInput from "../../ui-components/NumberInput";

function EntryWakeupFrequency({awakenings, setAwakenings}) {
    return (
        <div>
            <h2>How many times did you wake up, not counting your final awakening?</h2>
            <div className="input-div">
                <NumberInput input={awakenings} inputChange={setAwakenings}/>
            </div>
            <Button buttonText={"Next"} buttonPath={"/entry-wake-duration"}/>
        </div>
    )
};

export default EntryWakeupFrequency;