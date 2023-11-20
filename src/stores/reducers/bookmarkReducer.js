const initialState = {bookmarkScholarships : [], bookmarkMentoring : []};

export default function bookmarkReducer(state = initialState, action) {
    switch(action.type) {
        case 'fetch/getBookmarkScholarships' :
            return {...state, bookmarkScholarships : action.payload};
        case 'fetch/getBookmarkMentoring' :
            return {...state, bookmarkMentoring : action.payload};
        default :
            return state
    }
}