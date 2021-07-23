import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { loginRducer } from '../reducer/loginReducer';
import thunk from 'redux-thunk'
import { registerReducer } from '../reducer/registerReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginRducer,
    Registrar: registerReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)))