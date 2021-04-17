import { chain, omit, mapKeys, values, concat, includes } from 'lodash';

import {
  RecipesState,
  Recipe,
  RecipeActionTypes,
  ADD_RECIPE,
  ADD_RECIPE_SUCCESS,
  FETCH_RECIPE,
  FETCH_RECIPES,
  FILTER_RECIPES,
  PERSIST,
  ADD_RECIPE_FAIL,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAIL,
  DELETE_RECIPE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAIL,
  EDIT_RECIPE,
  EDIT_RECIPE_SUCCESS,
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
          selectedRecipe: action.payload.recipes.selectedRecipe,
        };
      }
      return state;

    case FILTER_RECIPES:
      const { filteredText, name, ingredients, tags } = action.payload;

      const filteredRecipesByName = name
        ? values(state.allRecipes).filter((recipe) => {
            return recipe.name
              .toLocaleLowerCase()
              .includes(filteredText.toLocaleLowerCase());
          })
        : [];

      const filteredRecipesByIngredients = values(state.allRecipes)
        .flatMap((recipe) => recipe.allIngredients)
        .flatMap((ingredients) => ingredients.name)
        .filter((ing) =>
          ing.toLocaleLowerCase().includes(filteredText.toLocaleLowerCase()),
        );

      // const filteredRecipesByIngredients = ingredients
      //   ? values(state.allRecipes).filter((recipe) => {
      //       return (
      //         recipe.allIngredients
      //           .values()
      //           .toLocaleLowerCase()
      //           .includes(filteredText.toLocaleLowerCase())
      //       );
      //     })
      //   : [];

      console.log(filteredRecipesByName);
      console.log(filteredRecipesByIngredients);
      console.log(action.payload);

      return state;

    case ADD_RECIPE:
    case FETCH_RECIPES:
    case DELETE_RECIPE:
    case EDIT_RECIPE:
      return { ...state, loading: true };

    case ADD_RECIPE_SUCCESS:
    case EDIT_RECIPE_SUCCESS:
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

    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        allRecipes: { ...omit(state.allRecipes, action.payload) },
        loading: false,
        selectedRecipe: null,
      };

    case ADD_RECIPE_FAIL:
    case FETCH_RECIPES_FAIL:
    case DELETE_RECIPE_FAIL:
      return {
        ...state,
        loading: false,
        // selectedRecipe: null,
        error: action.payload,
      };

    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        allRecipes: mapKeys(action.payload, 'id'),
      };

    case FETCH_RECIPE:
      const recipesWithKeys = mapKeys(state.allRecipes, 'id');
      return {
        ...state,
        selectedRecipe: recipesWithKeys[action.payload],
      };

    default:
      return state;
  }
};
