const initialState = {userDetail: null};

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'fetch/getProfileDetail':
            return {...state, userDetail : action.payload};
        default :
            return state
    }
}