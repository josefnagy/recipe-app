export const PERSIST = 'persist/REHYDRATE';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAIL = 'FETCH_RECIPES_FAIL';
export const VIEW_RECIPE = 'VIEW_RECIPE';
export const ADD_RECIPE = 'ADD_RECIPE';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_FAIL = 'ADD_RECIPE_FAIL';

interface PersistStoreAction {
  type: typeof PERSIST;
  // payload: Record<string, unknown>;
  payload: RootState;
}

interface ViewRecipeAction {
  type: typeof VIEW_RECIPE;
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
  | ViewRecipeAction
  | AddRecipe
  | AddRecipeSuccess
  | AddRecipeFail
  | FetchRecipes
  | FetchRecipesSuccess
  | FetchRecipesFail;
