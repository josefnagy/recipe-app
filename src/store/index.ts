import { combineReducers } from 'redux';

import { recipesReducer } from './recipes/reducers';

const rootReducer = combineReducers({
    recipes: recipesReducer,
});

export default rootReducer;
// export type AppState = ReturnType<typeof rootReducer>;
