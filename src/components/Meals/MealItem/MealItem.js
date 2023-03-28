import classes from "./MealItem.module.css";
import {MealItemForm} from "./MealItemForm";
import {useContext} from "react";
import {CartContext} from "../../../store/cart-context";

export const MealItem = ({id, name, price, description}) => {

    const cartCtx = useContext(CartContext);
    const handleItemAdd = (amount) => {
        cartCtx.addItem({
            id, name, price, amount
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{price.toFixed(2)}E£</div>
            </div>
            <div>
                <MealItemForm id={id} onAddItem={handleItemAdd}/>
            </div>
        </li>
    )
}