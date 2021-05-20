import * as TYPES from "../types";

let initialState = {
    selectedPhotoUpload: {}
}

export default function upload(state=initialState, action:any){
    console.log("ACTION TYPES =========================== ", typeof action.payload);
    
    switch (action.type) {
        case TYPES.SELECT__UPLOAD__PHOTO:
            return ({
                ...state,
                selectedPhotoUpload: action.payload
            })
        case TYPES.CLEAR__SELECT__UPLOAD__PHOTO:
            return ({
                ...state,
                selectedPhotoUpload: {}
            })
        default:
            return state;
    }
}