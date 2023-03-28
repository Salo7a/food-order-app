import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import {CartContext} from "../../store/cart-context";
import {useContext, useEffect, useState} from "react";

export const HeaderCartButton = (props) => {
    const [btnAnimated, setBtnAnimated] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const btnClasses = `${classes.button} ${btnAnimated ? classes.bump : ''}`

    const cartItemsNumber = cartCtx.items.reduce((prevSum, currentItem) => {
        return prevSum + currentItem.amount;
    }, 0);

    useEffect(() => {
        if (items.length === 0) return;
        setBtnAnimated(true);

        const animationResetTimer = setTimeout(() => setBtnAnimated(false), 300);

        return () => clearTimeout(animationResetTimer);
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>My Cart</span>
            <span className={classes.badge}>{cartItemsNumber}</span>
        </button>
    )
}