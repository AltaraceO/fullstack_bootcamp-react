import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import { Card } from "../UI/Card";
import { MealItem } from "./MealItem/MealItem";

export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://react-review-68b13-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const resData = await res.json();
      const extractedData = [];

      for (const key in resData) {
        extractedData.push({
          key: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price,
        });
      }

      setMeals(extractedData);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.key}
      id={meal.id}
      price={meal.price}
      description={meal.description}
      name={meal.name}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
