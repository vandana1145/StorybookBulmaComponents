import React from 'react';

const BulmaTags = (props) => {
    const {variant = "tag is-black", className, sizes, children, ...rest} = props
    return(
        <div className={`tag ${variant}`} {...rest}>
            {children}
        </div>
    );
}

export default BulmaTags;