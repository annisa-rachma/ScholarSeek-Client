import {combineReducers, applyMiddleware, legacy_createStore as createStore} from "redux"
import thunk from 'redux-thunk'
import bookmarkReducer from "./reducers/bookmarkReducer"
import forumReducer from "./reducers/forumReducer"
import mentoringReducer from "./reducers/mentoringReducer"
import scholarshipsReducer from "./reducers/scholarshipReducer"
import userReducer from "./reducers/userReducer"

const rootReducer = combineReducers({
    scholarshipsReducer : scholarshipsReducer,
    mentoringReducer : mentoringReducer,
    bookmarkReducer : bookmarkReducer,
    userReducer : userReducer,
    forumReducer : forumReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store