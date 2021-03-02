import React from 'react';
import Aside from './Aside';
import RecipeDetail from './RecipeDetail';
import Recipes from './Recipes';

const App: React.FC = () => {
    return (
        <div className="flex h-screen font-body">
            <Aside />
            <Recipes />
            <RecipeDetail />
        </div>
    );
};

export default App;
