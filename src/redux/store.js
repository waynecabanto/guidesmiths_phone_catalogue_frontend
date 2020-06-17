import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducer from './reducers';

/* THUNK allows us to call a function or perform a function if an action is called.*/
const middleware = [thunk];


const initialState = {};

const store = createStore(
  allReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    /* FOR DEV ONLY: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
    )
  );

export default store;