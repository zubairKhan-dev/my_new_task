/* eslint-disable */
import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers(
  { auth: authReducer }
);

const configureStore = () => {
  return createStore( rootReducer, applyMiddleware(thunk) );
}

export default configureStore
