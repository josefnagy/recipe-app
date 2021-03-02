import React from 'react';

import RecipeFilter from './RecipeFilter';
import RecipeList from './RecipeList';

const Recipes: React.FC = () => {
    return (
        <div className="w-64 bg-secondary text-tertiary">
            <RecipeFilter />
            <RecipeList />
        </div>
    );
};

export default Recipes;
