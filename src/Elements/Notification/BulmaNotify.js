import React from 'react';

const BulmaNotify = (props) => {
    const { variant="notification is-success", className, children, ...rest} = props
    return(
        <div className={`notification ${variant}`} {...rest}>
            <strong>{children}</strong>
            {<p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
            consectetur adipiscing elit</p>}
            {<p>Lorem ipsum dolor sit amet, <i>consectetur adipiscing elit</i>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>}
        </div>
    );
}

export default BulmaNotify;


// const Notify = (props) => {
//     const { variant="notification is-success", className, children, ...rest} = props
//     return(
//         <div className={`notification ${variant}`} {...rest}>
//             <strong>{children}</strong>
//             {<p>Lorem ipsum dolor sit amet, consectetur
//             adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
//             consectetur adipiscing elit</p>}
//             {<p>Lorem ipsum dolor sit amet, <i>consectetur adipiscing elit</i>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
//             </p>}
//         </div>
//     );
// }

// export default Notify;