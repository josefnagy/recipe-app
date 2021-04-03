import React, { useEffect } from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import { useAppSelector } from '../hooks';

import Aside from './Aside';
import AppInfo from './AppInfo';
import RecipeAdd from './RecipeAdd';
import RecipeEdit from './RecipeEdit';
import RecipeDelete from './RecipeDelete';
import RecipeDetail from './RecipeDetail';
import Recipe404 from './Recipe404';
import Recipes from './Recipes';

const App: React.FC = () => {
  const lastUpdatedAt = useAppSelector((state) => {
    const allRecipesArr = Object.values(state.recipes.allRecipes);
    const updatedAtArr = allRecipesArr.map((recipe) => recipe.updatedAt);
    return Math.max(...updatedAtArr);
  });

  useEffect(() => {
    console.log(lastUpdatedAt);
  }, [lastUpdatedAt]);

  return (
    <div className="flex h-screen font-heading">
      <Router history={history}>
        <Aside />
        <Recipes />
        <Switch>
          <Route path="/" exact component={AppInfo} />
          <Route path="/recipe/add" exact component={RecipeAdd} />
          <Route path="/recipe/edit/:id" exact component={RecipeEdit} />
          <Route path="/recipe/delete/:id" exact component={RecipeDelete} />
          <Route path="/recipe/:id" exact component={RecipeDetail} />
          <Route path="*" component={Recipe404} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
