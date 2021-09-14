// Import of redux libs
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// Import redux thunk for asynchronous operations
import thunk from 'redux-thunk';
// Import file reducers
import { authReducer } from './reducers/authReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// This constants handle to combine the reducers
const reducers = combineReducers({
  auth: authReducer,
});

// This constants is used to import the store in components
// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);
