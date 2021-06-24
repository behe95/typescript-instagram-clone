import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../store/reducers";


export default function UserInfo({info}:any) {
    const history = useHistory();
    const {user:userProfileInfo} = useSelector((state:RootState) => state.auth);
    
    return (
        <div className="profile__user__info__component">

            <div className="top">
                <div className="left">
                <img src={userProfileInfo?.profilePhoto?.url} alt="portrait1"/>
                </div>

                <div onClick={() => history.push('/accounts/edit')} className="right">
                    <p className="username">{userProfileInfo?.username}</p>
                    <button className="btn btn-light btn-sm">Edit Profile</button>
                </div>
            </div>

            <div className="bottom">
                <p className="username">{userProfileInfo?.fullName}</p>
                <p className="description">{userProfileInfo?.bio}</p>
            </div>

        </div>
    )
}