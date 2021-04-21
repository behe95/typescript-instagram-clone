import React from "react";
import { useHistory } from "react-router-dom";

interface HeaderProps{
    setShowGenderForm: React.Dispatch<React.SetStateAction<boolean>>;
    for: string;
}

export default function Header(props:HeaderProps){
    const history = useHistory();
    const onClickGoBackHandler = () => {
        if(props.for === 'gender__form') return props.setShowGenderForm(showGenderForm => !showGenderForm);
        history.goBack();
    }
    return (
        <div className="edit__profile__component__header">
            <button onClick={onClickGoBackHandler}>
            <span style={{display: "inline-block", transform: "rotate(270deg)"}}><svg aria-label="Back" className="edit__profile__header__svg" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span>
            </button>
            

            <p className="edit__profile__component__title">
                {
                    props.for === "gender__form" ? "Gender" : "Edit Profile" 
                }
            </p>
            
            {
                props.for === "gender__form" ? 
                <button onClick={onClickGoBackHandler} className="gender__select__done__button">
                Done
                </button>
                : null
            }
            
        </div>
    )
}