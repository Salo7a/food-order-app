import mealsImage from '../../assests/meals.jpg'
import classes from "./Header.module.css";
import {HeaderCartButton} from "./HeaderCartButton";

export const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReMeal</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Table with food"/>
            </div>
        </>
    )
}