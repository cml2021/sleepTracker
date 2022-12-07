import React, { useState } from "react";
import RatingScale from "../../ui-components/RatingScale";
import Button from "../../ui-components/Button";

function SetQualityRating({ qualityRating, setQualityRating }) {

    const [options] = useState(["Very Poor", "Poor", "Fair", "Good", "Very Good"])

    return (
        <div className="container">
            <div className="title">
                <h2>How would you rate the quality of your sleep?</h2>
            </div>
            <div className="input">
                <RatingScale options={options} qualityRating={qualityRating} setQualityRating={setQualityRating} />
            </div>
            <Button active={qualityRating === "" ? false : true} buttonText={"Next"} buttonPath={"/new-entry/comments"} />
        </div>
    )
};

export default SetQualityRating;