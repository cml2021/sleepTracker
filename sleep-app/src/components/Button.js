import React from "react";
import "../styles/Button.css"

function Button ({text, action}) {
    return (
        <div class="button">
            {text}
        </div>
    )
};

export default Button;