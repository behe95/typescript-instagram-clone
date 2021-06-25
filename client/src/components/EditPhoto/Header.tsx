import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { clearPhotoUpload, toggleDonePhotoEditing } from "../../store/actions/upload";


export default React.memo(function Header(){

    const history = useHistory();
    const dispatch = useDispatch();

    const onClickNextButtonHandler = async () => {
        await dispatch(toggleDonePhotoEditing());
        history.push('/create/details')
    }

    const onClickCloseButtonHandler = () => {
        dispatch(clearPhotoUpload());
        history.goBack();
    }


    return (
        <div className="edit__photo__header">
            <button className="close__btn" onClick={onClickCloseButtonHandler}>
                <svg aria-label="Close" className="close__btn__svg" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z" fillRule="evenodd"></path></svg>
                
                
            </button>

            <p>
                New Photo Post
            </p>

            <button
            onClick={onClickNextButtonHandler} 
            className="next__btn">
                    Next
            </button>
        </div>
    )
})