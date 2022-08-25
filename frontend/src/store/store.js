import {composeWithDevTools} from 'redux-devtools-extension';

import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import authReducer from '../reducers/authReducer';
import alertReducer from '../reducers/alertReducer'
import peopleReducer from '../reducers/peopleReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    people:peopleReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;