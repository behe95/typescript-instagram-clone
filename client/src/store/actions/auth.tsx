import * as TYPES from "../types";
import axios from 'axios';
import * as API from '../../api';
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";


export const logoutUser = () =>  async (dispatch: any) => {
    

    axios
        .get(API.LOGOUT, {withCredentials: true})
        .then(res => {})
        .catch(err => console.log(err));
    
    localStorage.removeItem('JWT__AUTH__TOKEN');
    localStorage.removeItem('JWT__REFRESH__TOKEN');
    localStorage.removeItem("persist:root");


    dispatch({
        type: TYPES.LOGOUT
    })

    return new Promise<boolean>((resolve, _) => {
        resolve(true);
    })

}

export const getProfileInfo = () => async (dispatch: any) => {
    
    axios
        .get(API.GET_PROFILE_INFO, {withCredentials: true})
        .then(res => {
            const {data} = res;
            console.log(data);
            
            dispatch({
                type: TYPES.GET_PROFILE_INFO,
                payload: {...data}
            })
        }).catch(err => {
            console.log(err);            
        })
}

export const editProfileInfo = (formValues:any):ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch:ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {

    return new Promise<void>((resolve, reject) => {

        axios
            .post(API.EDIT_PROFILE_INFO,{...formValues},{withCredentials: true})
            .then(res => {
                // setUserInfo(userInfo => ({...userInfo,...formValues}))
                // if(res.status === 200) history.goBack();
                dispatch({
                    type: TYPES.EDIT_PROFILE_INFO,
                    payload: {...formValues}
                })
                resolve();
                
            }).catch(err => {
                console.log(err);   
                reject(err);             
            })

    })
}

export const changeProfilePhoto = (formData: any): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        
        axios
            .post(API.CHANGE_PROFILE_PHOTO,formData,{withCredentials:true,headers: {
                "Contetnt-Type":"multipart/form-data" 
            }})
            .then(res => {
                // setUserInfo(userInfo => ({...userInfo,...res.data.data}))
                // if(res.status === 200) history.goBack();
                const {data} = res;
                
                dispatch({
                    type: TYPES.CHANGE_PROFILE_PHOTO,
                    payload: {...data?.data}
                })
                resolve();             
            }).catch(err => {
                console.log(err.response);
                reject(err);                
            })

    })
}

export const uploadPhoto = (formData: any): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise((resolve, reject) => {
        axios
            .post(API.UPLOAD_PHOTO, formData, {withCredentials:true,headers: {
                "Contetnt-Type":"multipart/form-data" 
            }})
            .then(res => {
                const {data:{data:uploadedPhotoInfo}} = res;
                console.log("===========================",uploadedPhotoInfo);
                dispatch({
                    type: TYPES.TOGGLOE_UPLOAD_LOADING
                })

                dispatch({
                    type: TYPES.CLEAR__SELECT__UPLOAD__PHOTO
                })
                
                dispatch({
                    type: TYPES.UPLOAD_PHOTO,
                    payload: uploadedPhotoInfo
                })
                
                resolve();
            }).catch(err => {
                console.log(err);                
            })
    })    
}

export const getAllPhotos = () => (dispatch: any) => {
    axios.get(API.GET_ALL_PHOTOS, {withCredentials: true}).then(res => {
        const {data:{photos}} = res;
        
        dispatch({
            type: TYPES.GET_ALL_PHOTOS,
            payload: photos
        })
        
    }).catch(err => console.log(err))
}