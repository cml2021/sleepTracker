import React from "react";
import RatingOption from "./RatingOption";

// set width based on number of options

function RatingScale({ options }) {

    return (
        <div className="rating-scale">
            {options.map((option, i) => <RatingOption key={i} value={option}/>)}
        </div>
    )
};

export default RatingScale;

