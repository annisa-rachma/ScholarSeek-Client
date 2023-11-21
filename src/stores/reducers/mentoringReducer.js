const initialState = {mentorings : [], mentoringDetail: null};

export default function mentoringReducer(state = initialState, action) {
    switch(action.type) {
        case 'fetch/getMentoring' :
            return {...state, mentorings : action.payload};
        case 'fetch/getMentoringDetail' :
            return {...state, mentoringDetail : action.payload};
        default :
            return state
    }
}