import React from "react";
import {useNavigate} from "react-router-dom"
import "../styles/Button.css"

function Button ({text, path, active}) {

    const navigate = useNavigate()

    const buttonClick = (event) => {
        event.preventDefault();
        if (active === true) {
            navigate(path);
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