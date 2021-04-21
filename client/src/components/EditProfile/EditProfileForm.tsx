import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/Auth.context";

interface formValuesType{
    fullName: string;
    username: string;
    website: string;
    bio: string;
    email: string;
    phone: string;
    gender: string;
    isSuggestSimilarAccount: boolean;
}

interface actionType{
    type: string;
    payload: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
}

interface EditProfileFormProps{
    formValues: formValuesType;
    dispatch: React.Dispatch<actionType>;
    setShowGenderForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function EditProfileForm(props:EditProfileFormProps){

    const history = useHistory();
    const {setUserInfo} = useAuth();
    
    const {setShowGenderForm, dispatch, formValues} = props;

    const onClickGenderInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();  
        setShowGenderForm(showGenderForm => !showGenderForm);
    }

    console.log("RENDERING EDITPROFILE",formValues);
    const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        axios
            .post('/api/profile/edit',{...formValues},{withCredentials: true})
            .then(res => {
                setUserInfo(userInfo => ({...userInfo,...formValues}))
                if(res.status === 200) history.goBack();
                
            }).catch(err => {
                console.log(err);                
            })
    }

    return (
        <div className="edit__profile__component__form">

            <div className="edit__profile__component__form__photo">
                <div className="left">
                    <img src="/static/images/portrait/portrait1.jfif" alt="portrait"/>
                </div>
                <div className="right">
                    <p className="username">User name</p>
                    <p className="change__photo">Change Profile Photo</p>
                </div>
            </div>

            <div className="user__info">
                <form className="user__info__form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                        value={formValues.fullName}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'formData', payload: e})}
                        name="fullName" type="text" placeholder="Name" className="form-control"/>
                    </div>

                    <div>
                        <p>Hello people disconver your account by using the name you're known by: either your full name or business name.</p>
                        <p style={{marginTop:"15px"}}>You can only change your name twice within 14 days</p>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                        value={formValues.username}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'formData', payload: e})}
                        name="username" type="text" placeholder="Username" className="form-control"/>
                    </div>

                    <div>
                        <p>In most cases, you'll be able to change your username back to "USERNAME" for another 14 days
                            <span className="learn__more">Learn more</span>
                        </p>
                    </div>


                    <div className="form-group">
                        <label htmlFor="Website">Website</label>
                        <input
                        value={formValues.website}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'formData', payload: e})}
                        name="website" type="text" placeholder="Website" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea
                        value={formValues.bio}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => dispatch({type: 'formData', payload: e})}
                         name="bio" style={{width:"100%", border:"1px solid #ced4da", borderRadius: ".25rem"}}  rows={3}></textarea>
                    </div>

                    <div>
                        <p className="personal__information">Personal Information</p>
                        <p>Provide your personal information, even if the account is used for business, a pet or something else. This won't be a part of your public profile.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        value={formValues.email}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'formData', payload: e})}
                        name="email" type="text" placeholder="Email" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                        value={formValues.phone}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'formData', payload: e})}
                        name="phone" type="text" placeholder="Phone Number" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <button className="gender__button" onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => onClickGenderInput(e)}>Gender</button>
                    </div>

                    <div className="similar__account__suggestion">
                        <p>Similiar Account Suggestions</p>
                        <div className="form-group">
                            <input
                            checked={formValues.isSuggestSimilarAccount}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch({type: 'formData', payload: e})}
                            name="isSuggestSimilarAccount" type="checkbox"/>
                            <label htmlFor="checkbox">Include your account when recommending similar accounts people might want to follow. 
                            <span>[?]</span>
                            </label>
                        </div>
                        
                    </div>

                    <div className="submit__section">
                        <button
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onSubmitHandler(e)}
                        className="btn-sm btn-primary btn">Submit</button>
                        <p>Temporarily disable my account</p>
                    </div>
                </form>
            </div>

        </div>
    )
}