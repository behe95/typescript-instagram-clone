import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { uploadPhoto } from "../../store/actions/auth";
import { clearPhotoUpload, toggleDonePhotoEditing, toggleUploadLoading } from "../../store/actions/upload";
import { RootState } from "../../store/reducers";

export async function dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {

    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
}

export default function Header(){

    const history = useHistory();
    const dispatch = useDispatch();
    const {caption,selectedPhotoUpload} = useSelector((state:RootState) => state.upload);

    const onClickNextButtonHandler = async () => {

        const file = await dataUrlToFile(selectedPhotoUpload, "image");
        console.log(caption, file);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('caption', caption);
        
        dispatch(toggleUploadLoading());

        await dispatch(uploadPhoto(formData));

        history.push("/home");

        // dispatch(toggleUploadLoading());

        
    }

    const onClickCloseButtonHandler = async () => {
        await dispatch(toggleDonePhotoEditing());
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