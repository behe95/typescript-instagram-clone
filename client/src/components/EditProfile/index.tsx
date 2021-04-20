import React from "react";
import BottomNavigationMenu from "../BottomNavigationMenu";
import "./EditProfile.scss";
import EditProfileForm from "./EditProfileForm";
import GenderForm from "./GenderForm";
import Header from "./Header";

export default function EditProfile(){
    const [showGenderForm, setShowGenderForm] = React.useState(false);
    const [headerFor, setHeaderFor] = React.useState("")

    React.useEffect(() => {
        if(showGenderForm) return setHeaderFor('gender__form');
        setHeaderFor("");
    },[showGenderForm])

    return (
        <div id="edit__profile__component">
            <Header
                setShowGenderForm={setShowGenderForm}
                for={headerFor}
            />
            {
                showGenderForm ? 
                <GenderForm
                />
                :
                <EditProfileForm
                setShowGenderForm={setShowGenderForm}
                />
            }

            {/* <EditProfileForm
            showGenderForm={showGenderForm} 
            setShowGenderForm={setShowGenderForm} /> */}
            
            <BottomNavigationMenu />
        </div>
    )
}