import classes from "./MealsAvailable.module.css";
import {Card} from "../../UI/Card/Card";
import {MealItem} from "../MealItem/MealItem";
import useRequest from "../../../hooks/use-request";
import {useEffect, useState} from "react";

export const MealsAvailable = () => {

    const [meals, setMeals] = useState([]);
    const {isLoading, error, sendRequest} = useRequest();


    useEffect(() => {
        const parseMeals = (res) => {
            setMeals(res.data);
        };
        sendRequest({method: 'get', url: "http://localhost:4000/meals"}, parseMeals);

    }, [sendRequest]);

    const mealsList = meals.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price}
                                                  description={meal.description}/>);


    return (
        <section>
            <Card className={classes.meals}>
                <ul>
                    {error && <p>An Error Has Occurred</p>}
                    {isLoading && !error && <p>Loading...</p>}
                    {!isLoading && !error && mealsList}
                </ul>
            </Card>
        </section>
    )
}