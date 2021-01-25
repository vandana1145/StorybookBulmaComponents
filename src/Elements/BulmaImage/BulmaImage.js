import React from 'react';

const BulmaImage = (props) => {
    const {variant="image is-128x128", children, className, ...rest} = props
    return(
        <div>
        <figure className={`image ${variant}`} {...rest}> 
            <img src="https://placeimg.com/540/540/any"></img>
        </figure>
        </div>
    );
}

export default BulmaImage;