import React, {useState} from "react";
import RatingScale from "../../ui-components/RatingScale";
import Button from "../../ui-components/Button";

function EntrySleepQuality({qualityRating, setQualityRating}) {

    const [options] = useState(["Very Poor", "Poor", "Fair", "Good", "Very Good"])

    return (
        <div>
            <h2>How would you rate the quality of your sleep?</h2>
            <RatingScale options={options} qualityRating={qualityRating} setQualityRating={setQualityRating} />
            <Button active={qualityRating === "" ? false : true} buttonText={"Next"} buttonPath={"/entry-comments"}/>
        </div>
    )
};

export default EntrySleepQuality;