import React from 'react';
import Header from './Header';
import "./SharePhoto.scss"
import SharePhoto from './SharePhoto';
import { RootState } from '../../store/reducers';
import { useSelector } from 'react-redux';


export default function SharePhotoIndex(){

    const {uploadLoading} = useSelector((state:RootState) => state.upload)

    if(uploadLoading){
        return (
            <div id="share__photo__component" className="d-flex justify-content-center align-items-center">
                <div className="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
                <span className="sr-only">Loading...</span>
                </div>

            </div>
        )
    }
    
    return (
        <div id="share__photo__component">
            <Header />
            <SharePhoto />
        </div>
    )
}