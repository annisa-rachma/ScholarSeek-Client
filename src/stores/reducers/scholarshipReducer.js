const initialState = {scholarships : [], scholarshipById : null};

export default function scholarshipsReducer(state = initialState, action) {
    switch(action.type) {
        case 'fetch/getScholarships' :
            return {...state, scholarships : action.payload};
        // case '' :
        //     return {...state, scholarshipById : action.payload};
        default :
            return state
    }
}