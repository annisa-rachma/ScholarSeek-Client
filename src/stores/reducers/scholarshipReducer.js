const initialState = {scholarships : [], scholarshipDetail: null};

export default function scholarshipsReducer(state = initialState, action) {
    switch(action.type) {
        case 'fetch/getScholarships' :
            return {...state, scholarships : action.payload};
        case 'fetch/getScholarshipsDetail' :
            return {...state, scholarshipDetail : action.payload};
        default :
            return state
    }
}