import React from 'react';
import { FaApple } from 'react-icons/fa';

const BulmaIcon = (props) => {
    const { variant="icon", className, children, color, size, ...rest} = props
    return(
        <div>
        <span className={`icon ${variant}`} {...rest}>
            {<FaApple/>}
        </span>
        </div>
    );
}

export default BulmaIcon;