export const PERSIST = 'persist/REHYDRATE';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const VIEW_RECIPE = 'VIEW_RECIPE';

interface PersistStoreAction {
    type: typeof PERSIST;
    payload: Record<string, unknown>;
}

interface ViewRecipeAction {
    type: typeof VIEW_RECIPE;
    payload: Recipe['id'];
}

interface FetchRecipeAction {
    type: typeof FETCH_RECIPES;
    payload: Recipe[];
}

export interface Recipe {
    id: string;
    name: string;
    description: string;
    portions: number;
    difficulty: string;
    cookingTime: number;
    url: string;
    notes: string;
    tags: string[];
    allIngredients: IngredientGroup[];
    battlePlan: string[];
    createdAt: number;
    updatedAt: number;
}

export interface IngredientGroup {
    ingGroupName: string;
    ingredients: Ingredient[];
}

export interface Ingredient {
    ingName: string;
    amount: number;
    unit: string;
    ingNote: string;
}

export interface RecipesState {
    allRecipes: Recipe[];
    selectedRecipe: Recipe | null;
}

export type RecipeActionTypes = PersistStoreAction | ViewRecipeAction | FetchRecipeAction;
