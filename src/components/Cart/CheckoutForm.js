import {checkoutFormConfig} from "./checkoutFormConfig";
import {useForm} from "../../hooks/use-form";
import useRequest from "../../hooks/use-request";
import classes from "./CheckoutForm.module.css"
import {useContext} from "react";
import {CartContext} from "../../store/cart-context";

export const CheckoutForm = ({onClose}) => {
    const {renderFormInputs, isFormValid, getValues} = useForm(checkoutFormConfig);
    const {isLoading, error, sendRequest} = useRequest();
    const cartCtx = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid()) return;
        let formData = getValues();
        let response = sendRequest({
            method: "post",
            url: "http://localhost:4000/orders",
            body: {...formData, totalAmount: cartCtx.totalAmount, items: cartCtx.items}
        });
        if (!error) {
            onClose()
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Checkout</h1>

            {renderFormInputs()}
            {error && <p className={classes.error}>Couldn't make an order</p>}
            <div className={classes.actions}>
                <button type="button" className={classes.buttonAlt} onClick={onClose}>Close</button>
                <button type="submit" className={classes.button} disabled={!isFormValid()}>Submit</button>
            </div>
        </form>
    );
}