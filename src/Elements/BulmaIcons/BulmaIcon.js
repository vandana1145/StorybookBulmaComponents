import React from 'react';
import { FaApple } from 'react-icons/fa';

const BulmaIcon = (props) => {
    const { variant="icon", className, children, color, size, text, ...rest} = props

    /*const renderIcon = () => {
        return (
            <span class="icon">
                <i class="fas FaApple"></i>
            </span>
        );
    }

    const renderIconWithText = () => {
        return (
            <span class="icon-text">
                <span class="icon">
                    <i class="fas FaApple"></i>
                </span>
                <span>Home</span>
            </span>
        );
    }

    if ( text ) {
        return renderIconWithText();
    } else {
        return renderIcon();
    }*/

    return(
        <div>
        <span className={`icon ${variant}`} {...rest}>
            {<FaApple size="2rem" />}
        </span>
        </div>
    );
}

export default BulmaIcon;