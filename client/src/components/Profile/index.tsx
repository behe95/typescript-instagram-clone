import React from "react";
import BottomNavigationMenu from "../BottomNavigationMenu";
import Posts from "./Posts";

import "./Profile.scss";
// import UserInfo from "./UserInfo";
import UserInfoAndActions from "./UserInfoAndActions";

export default function Profile() {
    
    return (
        <div id="profile__component">
            {/* <Header />
            <UserInfo />
            <Actions /> */}
            <UserInfoAndActions />
            <Posts />
            <BottomNavigationMenu />
        </div>
    )
}