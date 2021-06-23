import * as TYPES from "../types";


export const photoUpload = (file:any) => (dispatch:any) => Promise.resolve().then(() => {
    console.log("DEEEEEEEEEEEEEEEEEE");
    
    dispatch({
        type: TYPES.SELECT__UPLOAD__PHOTO,
        payload: file
    })
    
        // return new Promise((resolve, reject) => resolve(null))
    
})

export const clearPhotoUpload = () => (dispatch: any) => {
    console.log("ARRRRRRRRRRRRRRR");
    
    dispatch({
        type: TYPES.CLEAR__SELECT__UPLOAD__PHOTO
    })
}