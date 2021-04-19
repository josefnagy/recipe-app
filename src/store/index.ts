import { combineReducers } from 'redux';

import { recipesReducer } from './recipes/reducers';
import { authReducer } from './auth/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  recipes: recipesReducer,
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
