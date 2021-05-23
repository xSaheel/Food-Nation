export const TOGGLE_FAV = 'TOGGLE_FAV';

export const toggleFavorite = id => {
    return {
        type: TOGGLE_FAV,
        mealId: id 
    }
}