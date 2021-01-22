import React from 'react';
import { FaBeer } from 'react-icons/fa';

const BulmaIcon = (props) => {
    const { variant="icon-text icon has-text-infofas fa-info-circle", className, children, ...rest} = props
    return(
        <div className={`icon ${variant}`} {...rest}>
            {<FaBeer />}
        </div>
    );
}

export default BulmaIcon;