import React from "react";
import BottomNavigationMenu from "../BottomNavigationMenu";
import Options from "../Options";
import Posts from "./Posts";

import "./Profile.scss";
// import UserInfo from "./UserInfo";
import UserInfoAndActions from "./UserInfoAndActions";

export default function Profile() {

    const [showOptions, setShowOptions] = React.useState(false);

    if(showOptions) return <Options setShowOptions={setShowOptions} />
    
    return (
        <div id="profile__component">
            {/* <Header />
            <UserInfo />
            <Actions /> */}
            <UserInfoAndActions
                setShowOptions={setShowOptions}
            />
            <Posts />
            <BottomNavigationMenu />
        </div>
    )
}