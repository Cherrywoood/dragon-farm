import React from 'react';
import classes from './ModalWindow.module.css'
const ModalWindow = ({children, visible, setVisible}) => {
    const rootClasses = [classes.modal]
    if (visible) {
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.modalContent}>
                {children}
                <button className={classes.close} onClick={()=>setVisible(false)}>Cancel</button>
            </div>
        </div>
    );
};

export default ModalWindow;