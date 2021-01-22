import React from 'react';

// import '../../../node_modules/bulma/css/bulma.min.css'
const BulmaButton = (props) => {
    const { variant="button is-dark", className, children, ...rest } = props
    return(
            <button className={`button ${variant}`} {...rest}>
                {children}
            </button>
    );
}

export default BulmaButton;


