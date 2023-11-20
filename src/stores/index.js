import {combineReducers, applyMiddleware, legacy_createStore as createStore} from "redux"
import thunk from 'redux-thunk'
import scholarshipsReducer from "./reducers/scholarshipReducer"

const rootReducer = combineReducers({
    scholarshipsReducer : scholarshipsReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store