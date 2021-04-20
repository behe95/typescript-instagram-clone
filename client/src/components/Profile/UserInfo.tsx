import React from "react";


export default function UserInfo({info}:any) {
    return (
        <div className="profile__user__info__component">

            <div className="top">
                <div className="left">
                <img src="/static/images/portrait/portrait1.jfif" alt="portrait1"/>
                </div>

                <div className="right">
                    <p className="username">{info.username}</p>
                    <button className="btn btn-light btn-sm">Edit Profile</button>
                </div>
            </div>

            <div className="bottom">
                <p className="username">{info.fullName}</p>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptatem ut error magnam vel voluptatum labore velit, facilis.</p>
            </div>

        </div>
    )
}