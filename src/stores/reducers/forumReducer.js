const initialState = {forumDetail: null};

export default function forumReducer(state = initialState, action) {
    switch(action.type) {
        case 'fetch/getForumDetail' :
            return {...state, forumDetail : action.payload};
        default :
            return state
    }
}