import classes from "./Cart.module.css";
import {Modal} from "../UI/Modal/Modal";
import {useContext, useState} from "react";
import {CartContext} from "../../store/cart-context";
import {CartItem} from "./CartItem";
import {CheckoutForm} from "./CheckoutForm";

export const Cart = ({onCartClose}) => {
    const cartCtx = useContext(CartContext);
    const [checkoutStarted, setCheckoutStarted] = useState(false);

    const handleCartItemRemove = (id) => {
        cartCtx.removeItem(id);
    }
    const handleCartItemAdd = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => {
        return <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount}
                         onAdd={handleCartItemAdd.bind(null, item)}
                         onRemove={handleCartItemRemove.bind(null, item.id)}/>
    })}</ul>
    const cartEmpty = cartCtx.items.length === 0;


    const handleOrder = () => {
        setCheckoutStarted(true);
    }
    if (checkoutStarted) {
        return (
            <Modal onClose={onCartClose}>
                <CheckoutForm onClose={onCartClose}/>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{cartCtx.totalAmount.toFixed(2).toString()}E£</span>
                </div>
            </Modal>
        )
    }
    return (
        <Modal onClose={onCartClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount.toFixed(2).toString()}E£</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.buttonAlt} onClick={onCartClose}>
                    Close
                </button>
                <button className={classes.button} disabled={cartEmpty} onClick={handleOrder}>
                    Order
                </button>
            </div>
        </Modal>
    )
}