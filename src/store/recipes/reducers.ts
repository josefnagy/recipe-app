import _ from 'lodash';

import {
  RecipesState,
  RecipeActionTypes,
  ADD_RECIPE,
  ADD_RECIPE_SUCCESS,
  VIEW_RECIPE,
  FETCH_RECIPES,
  PERSIST,
  ADD_RECIPE_FAIL,
} from './types';

const INITIAL_STATE: RecipesState = {
  allRecipes: {},
  selectedRecipe: null,
  loading: false,
  error: null,
};

export const recipesReducer = (
  state = INITIAL_STATE,
  action: RecipeActionTypes,
): RecipesState => {
  switch (action.type) {
    case PERSIST:
      if (action.payload) {
        console.log(action.payload);
        return {
          ...state,
          allRecipes: action.payload.recipes.allRecipes,
        };
      }
      return state;

    case ADD_RECIPE:
      return { ...state, loading: true };

    case ADD_RECIPE_SUCCESS:
      const { id } = action.payload;
      return {
        ...state,
        allRecipes: {
          ...state.allRecipes,
          [id]: action.payload,
        },
        loading: false,
        selectedRecipe: null,
      };
    case ADD_RECIPE_FAIL:
      return {
        ...state,
        loading: false,
        selectedRecipe: null,
        error: action.payload,
      };

    case FETCH_RECIPES:
      // tohle pak v budoucnu smazat a dat do returnu, action.payload normalne bude obsahovat vzycky vsechny recepty takze neni potreba je tam pridavat
      const fetchedRecipes = _.mapKeys(action.payload, 'id');
      return {
        ...state,
        allRecipes: { ...state.allRecipes, ...fetchedRecipes },
        selectedRecipe: null,
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
