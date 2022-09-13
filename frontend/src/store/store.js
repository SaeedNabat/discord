import {composeWithDevTools} from 'redux-devtools-extension';

import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import authReducer from '../reducers/authReducer';
import alertReducer from '../reducers/alertReducer'
import peopleReducer from '../reducers/peopleReducer'
import chatReducer from '../reducers/chatReducer'
import roomReducer from '../reducers/roomReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    people:peopleReducer,
    chat: chatReducer,
    room: roomReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;