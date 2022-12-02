import React from "react";

function RatingOption({value, numOptions, selection, setSelection}) {

    // set isSelected based on selection state var
    const isSelected = selection === value ? true : false;

    // Set selection state var to component's value on click
    const onSetSelection = (e) => {
        e.preventDefault();
        setSelection(value);
    }

    // calculate width of component based on number of options in RatingScale
    const optionWidth = (numOptions) => {
        const frac = 100 / numOptions;
        const percent = frac.toString() + "%";
        return percent;
    }

    return (
        <div 
            className={isSelected === true ? "rating-option-selected" : "rating-option"} 
            onClick={onSetSelection}
            style={{width: optionWidth(numOptions)}}>
            <p>{value}</p>
        </div>
    )
}

export default RatingOption;