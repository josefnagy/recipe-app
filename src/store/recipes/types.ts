export const PERSIST = 'persist/REHYDRATE';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAIL = 'FETCH_RECIPES_FAIL';
export const FETCH_RECIPE = 'FETCH_RECIPE';
export const ADD_RECIPE = 'ADD_RECIPE';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_FAIL = 'ADD_RECIPE_FAIL';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_FAIL = 'DELETE_RECIPE_FAIL';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS';
export const EDIT_RECIPE_FAIL = 'EDIT_RECIPE_FAIL';

interface PersistStoreAction {
  type: typeof PERSIST;
  // payload: Record<string, unknown>;
  payload: RootState;
}

interface EditRecipeAction {
  type: typeof EDIT_RECIPE;
}

interface EditRecipeSuccessAction {
  type: typeof EDIT_RECIPE_SUCCESS;
  payload: Recipe;
}

interface EditRecipeFailAction {
  type: typeof EDIT_RECIPE_FAIL;
}

interface FetchRecipeAction {
  type: typeof FETCH_RECIPE;
  payload: Recipe['id'];
}
interface FetchRecipes {
  type: typeof FETCH_RECIPES;
}
interface FetchRecipesSuccess {
  type: typeof FETCH_RECIPES_SUCCESS;
  payload: Recipe[];
}

interface FetchRecipesFail {
  type: typeof FETCH_RECIPES_FAIL;
  payload: string;
}

interface AddRecipe {
  type: typeof ADD_RECIPE;
}

interface AddRecipeSuccess {
  type: typeof ADD_RECIPE_SUCCESS;
  payload: Recipe;
}

interface AddRecipeFail {
  type: typeof ADD_RECIPE_FAIL;
  payload: string;
}

interface DeleteRecipe {
  type: typeof DELETE_RECIPE;
}

interface DeleteRecipeSuccess {
  type: typeof DELETE_RECIPE_SUCCESS;
  payload: string;
}

interface DeleteRecipeFail {
  type: typeof DELETE_RECIPE_FAIL;
  payload: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  portions?: number;
  difficulty: string;
  cookingTime?: number;
  url?: string;
  notes: string;
  tags?: string[];
  allIngredients: IngredientGroup[];
  battlePlan: Step[];
  createdAt: number;
  updatedAt: number;
}

export interface Recipes {
  [id: string]: Recipe;
}

export interface Step {
  step: string;
}

export interface IngredientGroup {
  name: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  note?: string;
}

export interface RecipesState {
  allRecipes: Recipes;
  selectedRecipe: Recipe | null;
  loading: boolean;
  error: string | null;
}
export interface RootState {
  readonly recipes: RecipesState;
}

export type RecipeActionTypes =
  | PersistStoreAction
  | FetchRecipeAction
  | AddRecipe
  | AddRecipeSuccess
  | AddRecipeFail
  | FetchRecipes
  | FetchRecipesSuccess
  | FetchRecipesFail
  | DeleteRecipe
  | DeleteRecipeSuccess
  | DeleteRecipeFail
  | EditRecipeAction
  | EditRecipeSuccessAction
  | EditRecipeFailAction;
