import _ from 'lodash';

import { RecipesState, RecipeActionTypes, VIEW_RECIPE, FETCH_RECIPES, PERSIST } from './types';

const INITIAL_STATE: RecipesState = {
  allRecipes: [],
  selectedRecipe: null,
};

export const recipesReducer = (state = INITIAL_STATE, action: RecipeActionTypes): RecipesState => {
  switch (action.type) {
    case PERSIST:
      if (action.payload) {
        return {
          ...state,
        };
      }
      return state;

    case FETCH_RECIPES:
      return {
        ...state,
        allRecipes: action.payload,
      };

    case VIEW_RECIPE:
      const recipesWithKeys = _.mapKeys(state.allRecipes, 'id');
      return {
        ...state,
        selectedRecipe: recipesWithKeys[action.payload],
      };

    default:
      return state;
  }
};
