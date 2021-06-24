import * as TYPES from "../types";

let initialState = {
    user: {}
}

export default function auth(state=initialState, action:any){
    
    
    
    switch (action.type) {
        case TYPES.LOGOUT:
            return ({
                ...state,
                user: {}
            })
        default:
            return state;
    }
}
