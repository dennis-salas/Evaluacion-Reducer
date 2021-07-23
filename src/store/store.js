import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk'
import { loginRducer } from '../reducer/loginReducer';
import { registerReducer } from '../reducer/registerReducer';
import { adicionarReducer } from '../reducer/adicionarReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginRducer,
    Registrar: registerReducer,
    Adicionar: adicionarReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)