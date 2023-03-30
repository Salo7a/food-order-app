import React from 'react';
import {Input} from '../components/UI/Input/Input';

/**
 * Creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 * @param {string} placeholder - placeholder for the input
 * @param {boolean} disabled - set to true to disable the input
 */
export function createFormFieldConfig(label, name, type, defaultValue = '', placeholder = '', disabled = false) {
    return {
        renderInput: (handleChange, value, isValid, error, key) => {
            return (
                <Input
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    isValid={isValid}
                    value={value}
                    onChange={handleChange}
                    errorMsg={error}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            );
        },
        label,
        name,
        value: defaultValue,
        valid: false,
        errorMsg: '',
        touched: false,
    };
}