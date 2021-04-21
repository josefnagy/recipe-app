import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import { useAppSelector } from '../hooks';
import GuardedRoute from './GuardedRoute';

import Aside from './Aside';
import AppInfo from './AppInfo';
import RecipeAdd from './RecipeAdd';
import RecipeEdit from './RecipeEdit';
import RecipeDelete from './RecipeDelete';
import RecipeDetail from './RecipeDetail';
import Recipe404 from './Recipe404';
import Recipes from './Recipes';
import Signup from './Auth/Signup';
import Login from './Auth/Login';

const App: React.FC = () => {
  const isSignedIn = useAppSelector((state) =>
    state.auth.user ? true : false,
  );

  return (
    <div className="flex h-screen font-heading">
      <Router history={history}>
        <Aside />
        <Recipes />
        <Switch>
          <Route path="/" exact component={AppInfo} />
          <Route path="/auth/signup" exact component={Signup} />
          <Route path="/auth/login" exact component={Login} />
          <GuardedRoute
            path="/recipe/add"
            exact
            component={RecipeAdd}
            auth={isSignedIn}
          />
          <GuardedRoute
            path="/recipe/edit/:id"
            exact
            component={RecipeEdit}
            auth={isSignedIn}
          />
          <GuardedRoute
            path="/recipe/delete/:id"
            exact
            component={RecipeDelete}
            auth={isSignedIn}
          />
          <GuardedRoute
            path="/recipe/:id"
            exact
            component={RecipeDetail}
            auth={isSignedIn}
          />
          <Route path="*" component={Recipe404} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
