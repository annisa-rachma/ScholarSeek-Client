import {combineReducers, applyMiddleware, legacy_createStore as createStore} from "redux"
import thunk from 'redux-thunk'
import bookmarkReducer from "./reducers/bookmarkReducer"
import mentoringReducer from "./reducers/mentoringReducer"
import scholarshipsReducer from "./reducers/scholarshipReducer"

const rootReducer = combineReducers({
    scholarshipsReducer : scholarshipsReducer,
    mentoringReducer : mentoringReducer,
    bookmarkReducer : bookmarkReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store