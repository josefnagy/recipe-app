import db from '../../api/firebase';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { v4 as uuid } from 'uuid';

import history from '../../history';

export type ThunkResult<R> = ThunkAction<
  R,
  RecipesState,
  undefined,
  RecipeActionTypes
>;

import {
  Recipe,
  FETCH_RECIPE,
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAIL,
  FILTER_RECIPES,
  FilteredRecipeData,
  ADD_RECIPE,
  ADD_RECIPE_FAIL,
  ADD_RECIPE_SUCCESS,
  RecipeActionTypes,
  DELETE_RECIPE,
  DELETE_RECIPE_FAIL,
  DELETE_RECIPE_SUCCESS,
  EDIT_RECIPE,
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_FAIL,
  RecipesState,
} from './types';

//  -----------          FILTERING RECIPE ----------------------

export const filterRecipes = (fR: FilteredRecipeData): RecipeActionTypes => {
  return { type: FILTER_RECIPES, payload: fR };
};

//  -----------          EDITING RECIPE ----------------------

export const editRecipe = (editedRecipe: Recipe): ThunkResult<void> => async (
  dispatch,
) => {
  editedRecipe.updatedAt = Date.now();
  handleEditRecipe(dispatch);

  await db
    .collection('allRecipes')
    .doc(editedRecipe.id)
    .update(editedRecipe)
    .then(() => {
      console.log('RECIPE UPDATED ...');
      handleEditRecipeSuccess(dispatch, editedRecipe);
    })
    .catch((error) => {
      console.log('error editing recipe', error);
      handleEditRecipeFail(dispatch, error);
    });
};

const handleEditRecipe = (dispatch: Dispatch) => {
  dispatch({ type: EDIT_RECIPE });
};

const handleEditRecipeSuccess = (
  dispatch: Dispatch<RecipeActionTypes>,
  response: Recipe,
) => {
  dispatch({ type: EDIT_RECIPE_SUCCESS, payload: response });
  history.push('/');
};

const handleEditRecipeFail = (
  dispatch: Dispatch<RecipeActionTypes>,
  error: string,
) => {
  dispatch({ type: EDIT_RECIPE_FAIL, payload: error });
};

//  -----------          ADDING RECIPE ----------------------

export const addRecipe = (recipe: Recipe): ThunkResult<void> => async (
  dispatch,
) => {
  recipe.id = uuid();
  recipe.createdAt = Date.now();
  recipe.updatedAt = recipe.createdAt;

  handleAddRecipe(dispatch);

  await db
    .collection('allRecipes')
    .doc(recipe.id)
    .set(recipe)
    .then(() => {
      console.log('--- ADDED RCP TO DB ---');
      handleAddRecipeSuccess(dispatch, recipe);
    })
    .catch((error) => {
      console.error('Error adding user', error);
      handleAddRecipeFail(dispatch, error);
    });
};

const handleAddRecipe = (dispatch: Dispatch) => {
  dispatch({ type: ADD_RECIPE });
};

const handleAddRecipeSuccess = (
  dispatch: Dispatch<RecipeActionTypes>,
  response: Recipe,
) => {
  dispatch({ type: ADD_RECIPE_SUCCESS, payload: response });
  history.push('/');
};

const handleAddRecipeFail = (
  dispatch: Dispatch<RecipeActionTypes>,
  error: string,
) => {
  dispatch({ type: ADD_RECIPE_FAIL, payload: error });
};

//  -----------          FETCHING RECIPES ----------------------

export const fetchRecipes = (): ThunkResult<void> => async (dispatch) => {
  handleFetchRecipes(dispatch);
  await db
    .collection('allRecipes')
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) return;
      const rcps: Recipe[] = [];
      querySnapshot.forEach((doc) => {
        // type assertion, becouse i know more about doc.data() type then typescript so i have to cast it ...
        // in other words TS doesnt know what doc.data() will be, so i have to type cast it, becouse i know that data from FB is Recipe
        rcps.push(doc.data() as Recipe);
      });
      console.log('FETCHED RECIPES ...');
      handleFetchRecipesSuccess(dispatch, rcps);
    })
    .catch((error) => {
      console.log('Error fetching recipes ', error);
      handleFetchRecipesFail(dispatch, error);
    });
};

const handleFetchRecipes = (dispatch: Dispatch) => {
  dispatch({ type: FETCH_RECIPES });
};

const handleFetchRecipesSuccess = (
  dispatch: Dispatch<RecipeActionTypes>,
  response: Recipe[],
) => {
  dispatch({ type: FETCH_RECIPES_SUCCESS, payload: response });
};

const handleFetchRecipesFail = (
  dispatch: Dispatch<RecipeActionTypes>,
  error: string,
) => {
  dispatch({ type: FETCH_RECIPES_FAIL, payload: error });
};

//  -----------          DELETING RECIPE ----------------------
// export const deleteRecipe = (deletedId: string): ThunkResult<void> => async (
export const deleteRecipe = (deletedId: string): ThunkResult<void> => async (
  dispatch,
) => {
  handleDeleteRecipe(dispatch);
  await db
    .collection('allRecipes')
    .doc(deletedId)
    .delete()
    .then(() => {
      console.log('RECIPE DELETED ...');
      handleDeleteRecipeSuccess(dispatch, deletedId);
    })
    .catch((error) => {
      console.error('Error deleting recipe ', error);
      handleDeleteRecipeFail(dispatch, error);
    });
};

const handleDeleteRecipe = (dispatch: Dispatch) => {
  dispatch({ type: DELETE_RECIPE });
};

const handleDeleteRecipeSuccess = (
  dispatch: Dispatch<RecipeActionTypes>,
  response: string,
) => {
  dispatch({ type: DELETE_RECIPE_SUCCESS, payload: response });
  history.push('/');
};

const handleDeleteRecipeFail = (
  dispatch: Dispatch<RecipeActionTypes>,
  error: string,
) => {
  dispatch({ type: DELETE_RECIPE_FAIL, payload: error });
};

export const viewRecipe = (recipeId: Recipe['id']): RecipeActionTypes => {
  return { type: FETCH_RECIPE, payload: recipeId };
};
