import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import profileReducer from './Profile-reducer';
import dialogsReducer from './dialogs-reducer';
import siteBarReducer from './siteBar-reducer';
import usersReducer from './Users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from './App-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBarPage: siteBarReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)
  ));
window.store = store;

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;