import React from 'react'

export default function Bottomtab({
    showFilterTab,setShowFilterTab,
    isEditing,
    setIsEditing
    }:{
        showFilterTab: boolean;
        setShowFilterTab: React.Dispatch<React.SetStateAction<boolean>>;
        isEditing: boolean;
        setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
    }) {

    const onClickHandler = (tabPos: string) => {
        switch (tabPos) {
            case "left":
                if(isEditing) return setIsEditing(false);

                setShowFilterTab(true)
                break;
            case "right":
                if(isEditing) return setIsEditing(false);
                setShowFilterTab(false);
                break;
        
            default:
                break;
        }
    }

    return (
        <div id="edit__photo__bottomtab__component">
            <div className={`left ${showFilterTab && !isEditing ? 'active' : null}`} onClick={() => onClickHandler("left")}>
                <p>{isEditing ? "Cancel" : "Filter"}</p>
            </div>
            <div className={`right ${!showFilterTab && !isEditing ? 'active' : null}`} onClick={() => onClickHandler("right")}>
                <p>{isEditing ? "Done" : "Edit"}</p>
            </div>
        </div>
    )
}
