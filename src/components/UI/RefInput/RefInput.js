import classes from "./RefInput.module.css";
import React from "react";

export const RefInput = React.forwardRef(({className, label, input}, ref) => {
    return (
        <>
            <div className={`${classes.input} ${className}`}>
                <label htmlFor={input.id}>{label}</label>
                <input ref={ref} id={input.id} {...input}/>
            </div>
        </>
    )
});