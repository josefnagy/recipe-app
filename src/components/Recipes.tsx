import React from 'react';

import RecipeFilter from './RecipeFilter';
import RecipeList from './RecipeList';

const Recipes: React.FC = () => {
  return (
    <div className="bg-secondary text-tertiary fixed h-screen ml-20">
      <RecipeFilter />
      <RecipeList />
    </div>
  );
};

export default Recipes;
