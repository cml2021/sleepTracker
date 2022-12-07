import React from "react";
import Button from "../../ui-components/Button";
import NumberInput from "../../ui-components/NumberInput";

function SetNumberAwakenings({ numberAwakenings, setNumberAwakenings }) {
    return (
        <div className="container">
            <div className="title">
                <h2>How many times did you wake up, not counting your final awakening?</h2>
            </div>
            <div class="input">
                <div className="input-div">
                    <NumberInput input={numberAwakenings} inputChange={setNumberAwakenings} />
                </div>
            </div>
            <Button buttonText={"Next"} buttonPath={"/new-entry/duration-awakenings"} />
        </div>
    )
};

export default SetNumberAwakenings;