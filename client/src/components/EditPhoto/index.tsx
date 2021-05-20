import React from 'react';
import EditPhoto from './EditPhoto';
import Header from './Header';
import "./EditPhoto.scss"
import Bottomtab from './Bottomtab';
import FilterTab from './FilterTab';
import EditTab from './EditTab';
import useEdit from './useEdit';


export default function EditPhotoIndex(){

    const [showFilterTab, setShowFilterTab] = React.useState(true);

    const [isEditing, setIsEditing] = React.useState(false);

    const [editValues, onEditSliderChangeHandler]:any = useEdit();
    
    return (
        <div id="edit__photo__component">
            <Header />
            <EditPhoto
                editValues={editValues}
            />

            {
                showFilterTab ?
                <FilterTab />
                :
                <EditTab
                    editValues={editValues}
                    onEditSliderChangeHandler={onEditSliderChangeHandler}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                />
            }
            <Bottomtab
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            showFilterTab={showFilterTab} 
            setShowFilterTab={setShowFilterTab} />
        </div>
    )
}