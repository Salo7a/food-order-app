import classes from "./Input.module.css";
import React from "react";

export const Input = React.forwardRef(({className, label, input}, ref) => {
    return (
        <>
            <div className={`${classes.input} ${className}`}>
                <label htmlFor={input.id}>{label}</label>
                <input ref={ref} id={input.id} {...input}/>
            </div>
        </>
    )
});