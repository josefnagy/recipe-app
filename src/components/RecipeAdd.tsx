import React from 'react';
import { useDispatch } from 'react-redux';

import { Recipe } from '../store/recipes/types';
import { addRecipe } from '../store/recipes/actions';
import RecipeForm from './RecipeForm';

const defaultValues = {
  allIngredients: [
    {
      name: '',
      ingredients: [{ name: '', amount: undefined, unit: '', note: '' }],
    },
  ],
  battlePlan: [{ step: '' }],
};

const RecipeAdd: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (data: Recipe) => {
    console.log(data);
    dispatch(addRecipe(data));
  };

  return <RecipeForm defaultValues={defaultValues} onSubmit={onSubmit} />;
};

export default RecipeAdd;
