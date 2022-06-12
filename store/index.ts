import {applyMiddleware, combineReducers, createStore} from 'redux';
import generalReducer from './generalReducer/reducer';
import productsReducer from './productReducer/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  general: generalReducer,
  products: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
