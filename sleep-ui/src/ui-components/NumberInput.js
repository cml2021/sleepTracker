import React from "react";

function NumberInput({input, inputChange}) {

    const onSetInput = (e) => {
        inputChange(e.target.value);
    }

    return (
        <input 
            type="number" 
            min="0" 
            defaultValue={input} 
            required
            onChange={onSetInput}
        />
    )
};

export default NumberInput;