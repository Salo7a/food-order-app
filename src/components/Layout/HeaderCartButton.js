import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

export const HeaderCartButton = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}><CartIcon/></span>
            <span>My Cart</span>
            <span className={classes.badge}>0</span>
        </button>
    )
}