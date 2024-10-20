import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';  // Import useParams to get route params
import { fetchAllRecipes } from '../redux/recipeSlice';  // Fetch recipes if not already in state

const Recipe = () => {
    const dispatch = useDispatch();
    const { id } = useParams();  // Extract the recipe id from the URL
    const { recipes, status } = useSelector((state) => state.recipes);

    // Find the recipe based on the id from URL
    const recipe = recipes.find((r) => r.id === parseInt(id));

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllRecipes());  // Fetch recipes if not already loaded
        }
    }, [dispatch, status]);

    if (!recipe) {
        return <p>Loading recipe details...</p>;  // Display a loading message
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={recipe.image} alt={recipe.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{recipe.name}</h2>
                    <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                    <p><strong>Instructions:</strong> {recipe.instructions}</p>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
