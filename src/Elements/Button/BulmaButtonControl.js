import React from 'react';
import PropTypes from 'prop-types';

const BulmaButtonControl = (props) => {
    const {variant="button", className, children, color, size, ...rest} = props
    return(
        <div className="buttons">
            <button className="button is-dark">{className}</button>
            <button className="button">{size}</button>
        </div>
    );
}

BulmaButtonControl.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
}

BulmaButtonControl.defaultProps = {
    className: 'button is-dark',
    size: 'button is-large',
}

export default BulmaButtonControl;