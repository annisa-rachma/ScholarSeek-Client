const initialState = {bookmarkScholarships : []};

export default function bookmarkReducer(state = initialState, action) {
    switch(action.type) {
        case 'fetch/getBookmarkScholarships' :
            return {...state, bookmarkScholarships : action.payload};
        default :
            return state
    }
}