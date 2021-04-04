import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import db from '../api/firebase';

import { Recipe } from '../store/recipes/types';
import { fetchRecipes } from '../store/recipes/actions';
import { useAppSelector } from '../hooks';

const RecipeList: React.FC = () => {
  const allRecipes = useAppSelector((state) =>
    Object.values(state.recipes.allRecipes),
  );
  const lastUpdatedLocal = Math.max(
    ...allRecipes.map((recipe) => recipe.updatedAt),
  );
  const loading = useAppSelector((state) => state.recipes.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('Mounting RECIPE LIST');
    const unsubscribe = db.collection('allRecipes').onSnapshot((snap) => {
      if (snap && !loading) {
        const updatedAtArrDB = snap.docs.map((doc) => doc.data().updatedAt);
        const lastUpdatedDB = Math.max(...updatedAtArrDB);
        if (
          snap.size !== allRecipes.length ||
          lastUpdatedLocal !== lastUpdatedDB
        ) {
          console.log('FETCHING RECIPE DATA ...');
          dispatch(fetchRecipes());
        }
      }
    });
    return () => {
      // console.log('unmounting RECIPE LIST');
      unsubscribe();
    };
  });

  const renderRecipes = allRecipes.map((recipe: Recipe, index) => (
    <Link
      className="py-1 px-3 block hover:bg-tertiary cursor-pointer hover:text-secondary"
      key={index}
      to={`/recipe/${recipe.id}`}
    >
      {recipe.name}
    </Link>
  ));

  return (
    <div className="font-heading font-light py-3 w-64">{renderRecipes}</div>
  );
};

export default RecipeList;
