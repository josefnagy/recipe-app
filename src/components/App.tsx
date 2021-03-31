import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Aside from './Aside';
import AppInfo from './AppInfo';
import RecipeAdd from './RecipeAdd';
import RecipeEdit from './RecipeEdit';
import RecipeDelete from './RecipeDelete';
import RecipeDetail from './RecipeDetail';
// import RecipeControls from './RecipeControls';
import Recipes from './Recipes';

const App: React.FC = () => {
  return (
    <div className="flex h-screen font-heading">
      <Router history={history}>
        <Aside />
        <Recipes />
        {/* <RecipeControls /> */}
        <Switch>
          <Route path="/" exact component={AppInfo} />
          <Route path="/recipe/add" component={RecipeAdd} />
          <Route path="/recipe/edit/:id" component={RecipeEdit} />
          <Route path="/recipe/delete/:id" component={RecipeDelete} />
          <Route path="/recipe/:id" component={RecipeDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
