import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppState } from '../store';
import { Recipe } from '../store/recipes/types';
import { fetchRecipes } from '../store/recipes/actions';

const RecipeList: React.FC = () => {
  const dispatch = useDispatch();
  const recipes: Recipe[] = useSelector((state: AppState) => state.recipes.allRecipes);
  // console.log(recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const renderRecipes = recipes.map((recipe: Recipe, index) => (
    <Link
      className="py-1 px-3 block hover:bg-tertiary cursor-pointer hover:text-secondary"
      key={index}
      to={`/recipe/${recipe.id}`}
    >
      {recipe.name}
    </Link>
  ));

  return <div className="font-heading font-light py-3 w-64">{renderRecipes}</div>;
};

export default RecipeList;
