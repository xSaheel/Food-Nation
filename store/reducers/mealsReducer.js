import { MEALS } from '../../Data';
import { TOGGLE_FAV } from '../actions/mealsActions';

const initialState = {          // alias as meals in App.js
    meals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch(action.type) { 
        case TOGGLE_FAV:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if(existingIndex >= 0){
                const newFavoriteMeals = state.favoriteMeals.filter(meal => meal.id !== action.mealId);
                return { ...state, favoriteMeals: newFavoriteMeals };
            }
            else{
                const myMeal = state.meals.find(meal => meal.id === action.mealId);
                const newFavoriteMeals = [...state.favoriteMeals, myMeal];
                return { ...state, favoriteMeals: newFavoriteMeals };
            }
        default: 
            return state;
    }
}

export default mealsReducer;