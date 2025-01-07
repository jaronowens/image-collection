import React from "react";

const Button = ({id, handler, children }) => {
    // add icon support to this component when necessary. or do it via CSS classes, i'm not your boss
    
    return (
        <button className='pager-button' id={id} onClick={handler}>{children}</button>
    );
}
export default Button;