import React from 'react';


const BulmaDD = (props) => {
    const {variant="dropdown", variant1 = "dropdown-trigger",children, className, hoverable, color, ...rest} = props
    return(
        <div className={`dropdown ${variant}`} {...rest}>
            <div className={`dropdown-trigger ${variant1}`}>
                <button aria-haspopup="true" aria-controls="dropdown-menu3">

                </button>
            </div>
        </div>
    );
}