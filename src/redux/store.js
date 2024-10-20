import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./recipeSlice";

const store = configureStore({
    reducer: {
        recipes: recipesReducer,
    },
});

export default store;
