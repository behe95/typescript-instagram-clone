import React from "react";
import BottomNavigationMenu from "../BottomNavigationMenu";
import "./EditProfile.scss";
import EditProfileForm from "./EditProfileForm";
import GenderForm from "./GenderForm";
import Header from "./Header";
import useForm from "./useForm";

export default function EditProfile(){
    const [showGenderForm, setShowGenderForm] = React.useState(false);
    const [headerFor, setHeaderFor] = React.useState("")

    React.useEffect(() => {
        if(showGenderForm) return setHeaderFor('gender__form');
        setHeaderFor("");
    },[showGenderForm])

    const [formValues, dispatch] = useForm();


    return (
        <div id="edit__profile__component">
            <Header
                setShowGenderForm={setShowGenderForm}
                for={headerFor}
            />
            {
                showGenderForm ? 
                <GenderForm
                formValues={formValues}
                dispatch={dispatch}
                />
                :
                <EditProfileForm
                formValues={formValues}
                dispatch={dispatch}
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