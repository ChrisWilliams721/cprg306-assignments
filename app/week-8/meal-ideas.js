"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.meals; // This should be an array of meal objects
};

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        if (ingredient) {
            try {
                const meals = await fetchMealIdeas(ingredient);
                setMeals(meals || []); // Set meals to an empty array if no meals are found
            } catch (error) {
                console.error("Failed to fetch meals:", error);
            }
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]); // Fetch meals whenever the ingredient changes

    return (
        <div>
            <h2>Meal Ideas</h2>
            <p>Here are some meal ideas using: {ingredient}</p>
            <ul>
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </li>
                    ))
                ) : (
                    <p>No meal ideas found.</p>
                )}
            </ul>
        </div>
    );
}
