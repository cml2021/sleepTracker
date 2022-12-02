import React from "react";
import RatingOption from "./RatingOption";

function RatingScale({ options, qualityRating, setQualityRating }) {

    return (
        <div className="rating-scale">
            {options.map((option, i) => 
                <RatingOption 
                    key={i} 
                    value={option} 
                    numOptions={options.length}
                    selection={qualityRating}
                    setSelection={setQualityRating}
                />
                )}
        </div>
    )
};

export default RatingScale;

