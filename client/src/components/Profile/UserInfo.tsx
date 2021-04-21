import React from "react";
import { useHistory } from "react-router-dom";


export default function UserInfo({info}:any) {
    const history = useHistory();
    return (
        <div className="profile__user__info__component">

            <div className="top">
                <div className="left">
                <img src="/static/images/portrait/portrait1.jfif" alt="portrait1"/>
                </div>

                <div onClick={() => history.push('/accounts/edit')} className="right">
                    <p className="username">{info.username}</p>
                    <button className="btn btn-light btn-sm">Edit Profile</button>
                </div>
            </div>

            <div className="bottom">
                <p className="username">{info.fullName}</p>
                <p className="description">{info.bio}</p>
            </div>

        </div>
    )
}