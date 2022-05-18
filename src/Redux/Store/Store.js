import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux"
import thunk from "redux-thunk"


const middlewareThunk = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = legacy_createStore(combineReducers, middlewareThunk)

export default store