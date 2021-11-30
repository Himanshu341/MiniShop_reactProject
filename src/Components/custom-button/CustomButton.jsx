import React from 'react';

import './custombutton.style.css';

const CustomButton = ({childern , ...otherProps}) => {
    return(
        <>
            <button className="custom-button" {...otherProps}>
                {childern}
            </button>
        </>
    );
}

export default CustomButton;