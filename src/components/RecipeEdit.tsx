import React from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

import { Recipe } from '../store/recipes/types';
import { editRecipe } from '../store/recipes/actions';
import RecipeForm from './RecipeForm';
import { useAppSelector } from '../hooks';

const RecipeEdit: React.FC = () => {
  const dispatch = useDispatch();
  const recipe = useAppSelector((state) => state.recipes.selectedRecipe);

  const onSubmit = (data: Recipe) => {
    if (recipe) {
      data.id = recipe.id;
      data.createdAt = recipe.createdAt;
      dispatch(editRecipe(data));
    }
    console.log('ERROR, neni recipe ID ...');
  };

  return (
    <RecipeForm
      defaultValues={_.pick(
        recipe,
        'allIngredients',
        'battlePlan',
        'description',
        'difficulty',
        'name',
        'notes',
        'portions',
        'url',
        'cookingTime',
      )}
      onSubmit={onSubmit}
    />
  );
};

export default RecipeEdit;
