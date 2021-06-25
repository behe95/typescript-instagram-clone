import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import * as TYPES from "../types";

const toBase64 = (file:Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


export const photoUpload = (file:any) => (dispatch:any) => Promise.resolve().then(async () => {
    try {
        let base64File;
        if(typeof file === "string"){
            base64File = file;
        }else{
            base64File = await toBase64(file)
        }
        
        dispatch({
            type: TYPES.SELECT__UPLOAD__PHOTO,
            payload: base64File
        })
        
    } catch (error) {
        console.log(error);
        
    }
    
        // return new Promise((resolve, reject) => resolve(null))
    
})


export const clearPhotoUpload = () => (dispatch: any) => {
    
    dispatch({
        type: TYPES.CLEAR__SELECT__UPLOAD__PHOTO
    })
}

export const setEditedPhoto = (dataUrl:string) => (dispatch:any) => Promise.resolve().then(() => {
    
    dispatch({
        type: TYPES.SET_EDITED_PHOTO,
        payload: dataUrl
    })
    
        // return new Promise((resolve, reject) => resolve(null))
    
})

export const clearEditedPhoto = () => (dispatch: any) => {
    
    dispatch({
        type: TYPES.CLEAR_SET_EDITED_PHOTO
    })
}

export const toggleDonePhotoEditing = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>(resolve => {
        dispatch({
            type: TYPES.TOGGOLE_DONE_PHOTO_EDITING
        })
        resolve();
    })
}

export const changePhotoCaption = (e: React.ChangeEvent<HTMLTextAreaElement>) => (dispatch: any) => {
    dispatch({
        type: TYPES.PHOTO_CAPTION,
        payload: e.target.value
    })
}

export const setFilter = (filter: string) => (dispatch:any) => {
    dispatch({
        type: TYPES.SET_FILTER,
        payload: filter
    })
}

export const toggleUploadLoading = () => (dispatch: any) => {
    dispatch({
        type: TYPES.TOGGLOE_UPLOAD_LOADING
    })
}