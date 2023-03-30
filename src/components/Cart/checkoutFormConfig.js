// object representation of signup form
import {createFormFieldConfig} from "../../utils/formConfig";
import {
    requiredRule,
    minLengthRule,
    emailRule,
} from '../../utils/inputValidationRules';

export const checkoutFormConfig = {
    name: {
        ...createFormFieldConfig('Full Name', 'name', 'text', '', 'Your Full Name'),
        validationRules: [
            requiredRule('name'),
            minLengthRule('name', 3)
        ],
    },
    email: {
        ...createFormFieldConfig('Email', 'email', 'email', '', 'Your Email'),
        validationRules: [
            requiredRule('email'),
            emailRule()
        ],
    },
    address: {
        ...createFormFieldConfig('Address', 'address', 'text', '', 'Your Address'),
        validationRules: [
            requiredRule('address'),
            minLengthRule('address', 3)
        ],
    },
    postal: {
        ...createFormFieldConfig('Postal Code', 'postal', 'text', '', 'Your Postal Code'),
        validationRules: [
            requiredRule('postal'),
            minLengthRule('postal', 3)
        ],
    }

};