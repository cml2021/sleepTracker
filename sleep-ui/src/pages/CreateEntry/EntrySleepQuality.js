import React, {useState} from "react";
import RatingScale from "../../ui-components/RatingScale";
import Button from "../../ui-components/Button";

function EntrySleepQuality() {

    const [options, setOptions] = useState(["Very Poor", "Poor", "Fair", "Good", "Very Good"])

    // TODO: dynamically calculate width of options, set max/min width on scale, add selected state dynamic class

    return (
        <div>
            <h2>How would you rate the quality of your sleep?</h2>
            <RatingScale options={options}/>
            <Button buttonText={"Next"}/>
        </div>
    )
};

export default EntrySleepQuality;