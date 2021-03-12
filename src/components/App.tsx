import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Aside from './Aside';
import AppInfo from './AppInfo';
import RecipeInfo from './RecipeInfo';
import RecipeDetail from './RecipeDetail';
import Recipes from './Recipes';

const App: React.FC = () => {
    return (
        <div className="flex h-screen font-heading">
            <Router history={history}>
                <Aside />
                <Recipes />
                <Switch>
                    <Route path="/" exact component={AppInfo} />
                    <Route path="/recipe/info/:id" exact component={RecipeInfo} />
                    <Route path="/recipe/detail/:id" exact component={RecipeDetail} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
