import React from 'react';
import { useNavigate } from 'react-router';

function Button({buttonText, buttonPath, active, isSubmit, onSubmit}) {

    const navigate = useNavigate();

    if (active === true | active === undefined) {
        if (isSubmit === true) {
            return (
                <div className='button-active' onClick={onSubmit}>
                <p className='button-txt'>{buttonText}</p>
            </div>
            )
        } else {
            return (
                <div className='button-active' onClick={() => navigate(buttonPath)}>
                    <p className='button-txt'>{buttonText}</p>
                </div>
            )
        }
    } else {
        return (
            <div className="button-disabled">
                <p className="button-txt">{buttonText}</p>
            </div>
        )
    }
};

export default Button;