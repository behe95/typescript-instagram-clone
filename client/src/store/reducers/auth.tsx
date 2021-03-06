import * as TYPES from "../types";

let initialState = {
    user: null,
    photos: [] as Array<Object>
}

export default function auth(state=initialState, action:any){
    switch (action.type) {
        case TYPES.LOGOUT:
            return ({
                ...state,
                user: null
            })
        case TYPES.GET_PROFILE_INFO:
            return ({
                ...state,
                user: {...action.payload}
            })
        case TYPES.CHANGE_PROFILE_PHOTO:
            return ({
                ...state,
                user: {...(state.user as any), ...action.payload}
            })
        case TYPES.EDIT_PROFILE_INFO:
            return ({
                ...state,
                user: {...(state.user as any), ...action.payload}
            })
        case TYPES.GET_ALL_PHOTOS:
            return ({
                ...state,
                photos: [...action.payload]
            })
        case TYPES.CLEAR_ALL_AUTH:
            return initialState;
        case TYPES.UPLOAD_PHOTO:
            return ({
                ...state,
                photos: [...state.photos, action.payload]
            })
        default:
            return state;
    }
}
