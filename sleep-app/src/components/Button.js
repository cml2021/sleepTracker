import React from "react";
import "../styles/Button.css"

function Button ({text, path, active}) {

    const buttonClick = (event) => {
        event.preventDefault();
        if (active === true) {
            alert(`Opens ${path}`)
        }
    }

    const className = active === true ? "button" : "button disabled";

    return (
        <div className={className} onClick={buttonClick}>
            {text}
        </div>
    )
};

export default Button;