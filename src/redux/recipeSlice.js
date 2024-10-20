import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllRecipes = createAsyncThunk("recipes/fetchAllRecipes", async () => {
    const result = await axios.get("https://dummyjson.com/recipes");
    return result.data.recipes || []; 
});


const recipesSlice = createSlice({
    name: "recipes",
    initialState: {
        recipes: [], 
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllRecipes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllRecipes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.recipes = Array.isArray(action.payload) ? action.payload : []; 
            })
            .addCase(fetchAllRecipes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const recipesReducer = recipesSlice.reducer;