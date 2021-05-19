import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { clearPhotoUpload } from "../store/actions/upload";


export default function Header(){

    const history = useHistory();
    const dispatch = useDispatch();

    const onClickNextButtonHandler = () => {
        
    }

    const onClickCloseButtonHandler = () => {
        history.goBack();
    }


    return (
        <div className="share__photo__header">
            <button className="back__btn" onClick={onClickCloseButtonHandler}>
            <span style={{display: "inline-block", transform: "rotate(270deg)"}}>
            <svg aria-label="Back" className="back__btn__svg" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
            </span>
                
                
            </button>

            <p>
                New Post
            </p>

            <button
            onClick={onClickNextButtonHandler} 
            className="next__btn">
                Share
            </button>
        </div>
    )
}