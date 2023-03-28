import classes from './MealItemForm.module.css';
import {Input} from "../../UI/Input/Input";
import {useRef, useState} from "react";

export const MealItemForm = ({id, onAddItem}) => {
    const addedAmountRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
    const mealAddHandler = (e) => {
        e.preventDefault();
        console.log(e);
        let addedAmountString = addedAmountRef.current.value;
        let addedAmount = +addedAmountString;
        if (addedAmountString.trim() === 0 || addedAmount <= 0 || addedAmount >= 10) {
            setAmountIsValid(false);
            return;
        }
        setAmountIsValid(true);
        onAddItem(addedAmount);
    };

    return (
        <form className={classes.form} onSubmit={mealAddHandler}>
            <Input ref={addedAmountRef} label={'Amount'} input={
                {
                    id: `amount-${id}`,
                    type: 'number',
                    min: 1,
                    max: 10,
                    step: 1,
                    defaultValue: 1
                }
            }/>
            <button>+Add</button>
            {!amountIsValid && <p>Please enter a value between 1-10!</p>}
        </form>
    )
}