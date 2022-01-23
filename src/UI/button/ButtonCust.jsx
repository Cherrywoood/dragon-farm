import React from 'react';
import classes from "./ButtonCust.module.css";
const ButtonCust = ({children, ...props}) => {
    return (
            <button {...props} className={classes.ButtonCust} >
                {children}
            </button>
    );
};

export default ButtonCust;