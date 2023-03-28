import classes from "./MealsAvailable.module.css";
import {DUMMY_MEALS} from "./demo-data";
import {Card} from "../../UI/Card/Card";
import {MealItem} from "../MealItem/MealItem";

export const MealsAvailable = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price}
                                                        description={meal.description}/>)
    return (
        <section>
            <Card className={classes.meals}>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}