import React from 'react'

const initEditValues = {
    brightness: 100,
    contrast: 100,
    // warmth: 100,
    saturation: 100,
}

export default function useEdit() {
    
    const [editValues, setEditValues] = React.useState({
        ...initEditValues
    });

    const onEditSliderChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEditValues({
            ...editValues,
            [e.target.name]: parseInt(e.target.value)
        })
    }

    return [editValues, onEditSliderChangeHandler];
}
