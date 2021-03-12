import { Recipe, VIEW_RECIPE, RecipeActionTypes } from './types';

export const viewRecipe = (recipe: Recipe): RecipeActionTypes => {
    return {
        type: VIEW_RECIPE,
        payload: recipe,
    };
};
