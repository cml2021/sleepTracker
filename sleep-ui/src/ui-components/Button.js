import React from 'react';
import { useNavigate } from 'react-router';

function Button({buttonText, buttonPath}) {
    const navigate = useNavigate();
    
    return (
        <div className='button' onClick={() => navigate(buttonPath)}>
        <p className='button-txt'>{buttonText}</p>
    </div>
    )
};

export default Button;