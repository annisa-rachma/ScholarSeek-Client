const initialState = {
    name: "",
    role: "",
    profileImg: "",
    slug: "",
    id: "",
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'login':
            return {...state, ...action.payload}
        case 'logout':
            return initialState
        default:
            return state
    }
}
