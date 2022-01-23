import React from 'react';
import classes from './InputCust.module.css'
const InputCust = ({value, ...props}) => {
    return (
        <input value={value} className={classes.inputCast} {...props}/>
    );
};

export default InputCust;