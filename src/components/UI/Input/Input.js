import classes from './Input.module.css';
import {useState} from "react";

export const Input = ({
                          id,
                          label,
                          name,
                          type,
                          value,
                          placeholder,
                          disabled,
                          onChange,
                          isValid,
                          errorMsg,
                      }) => {
    const [touched, setTouched] = useState(false);
    const onBlur = (e) => {
        setTouched(true);
    }
    return (

        <div className={classes.inputContainer}>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} onChange={onChange} onBlur={onBlur} value={value} placeholder={placeholder}
                   disabled={disabled}/>
            {touched && !isValid && errorMsg && <p className={classes.error}>{errorMsg}</p>}
        </div>
    )
}