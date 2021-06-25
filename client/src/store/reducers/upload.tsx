import * as TYPES from "../types";

let initialState = {
    selectedPhotoUpload: null,
    editedPhoto: null,
    donePhotoEditing: false,
    caption: "",
    filter: null,
    uploadLoading: false
}

export default function upload(state=initialState, action:any){
    
    switch (action.type) {
        case TYPES.SELECT__UPLOAD__PHOTO:           
            
            return ({
                ...state,
                selectedPhotoUpload: action.payload
            })
        case TYPES.CLEAR__SELECT__UPLOAD__PHOTO:
            return ({
                ...initialState
            })
        case TYPES.SET_EDITED_PHOTO:           
            
            return ({
                ...state,
                editedPhoto: action.payload
            })
        case TYPES.CLEAR_SET_EDITED_PHOTO:
            return ({
                ...state,
                editedPhoto: null
            })
        case TYPES.TOGGOLE_DONE_PHOTO_EDITING:
            return ({
                ...state,
                donePhotoEditing: !state.donePhotoEditing
            })
        case TYPES.PHOTO_CAPTION:
            return ({
                ...state,
                caption: action.payload
            })
        case TYPES.SET_FILTER:
            return ({
                ...state,
                filter: action.payload
            })
        case TYPES.TOGGLOE_UPLOAD_LOADING:
            return ({
                ...state,
                uploadLoading: !state.uploadLoading
            })
        default:
            return state;
    }
}
