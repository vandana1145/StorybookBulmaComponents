import React from 'react';


const BulmaProgressBar = (props) => {
    const {variant="progress is-primary", children, className, ...rest} = props
    return(
        <progress className={`progress ${variant}`} {...rest}>
            {children}
        </progress>
    );
}

export default BulmaProgressBar;