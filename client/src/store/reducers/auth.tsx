import * as TYPES from "../types";

let initialState = {
    user: {}
}

export default function auth(state=initialState, action:any){
    console.log("AUTH REDUCERS");
    
    
    
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
