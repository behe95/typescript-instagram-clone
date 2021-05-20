import React from 'react'

const initEditValues = {
    brightness: 100
}

export default function useEdit() {
    
    const [editValues, setEditValues] = React.useState({
        ...initEditValues
    });

    const onEditSliderChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEditValues({
            ...editValues,
            [e.target.name]: e.target.value
        })
    }

    return [editValues, onEditSliderChangeHandler];
}
