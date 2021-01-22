import React from 'react'

const BulmaBox = (props) => {
    const {variant="box", ...rest} = props
    return(
        <div className={`box ${variant}`} {...rest} />
    );
}


// const BulmaBox = (props) => {
//     const { variant="box", className, children, ...rest} = props
//     return(
//         <div className={`box ${variant}`} {...rest}>
//             {children}
//         </div>
//     );
// }

export default BulmaBox;