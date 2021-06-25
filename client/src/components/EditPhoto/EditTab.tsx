import React from 'react'

const edits = [
    {
        title: 'Brightness',
        name: 'brightness',
        icon: 'fas fa-sun',
        defaultValue: 100,
        maxValue: 200,
        minValue: 0
    },
    {
        title: "Contrast",
        name: "contrast",
        icon: 'fas fa-adjust',
        defaultValue: 100,
        maxValue: 200,
        minValue: 0
    },
    // {
    //     title: "Structure",
    //     name: "structure",
    //     icon: 'fas fa-caret-up',
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // },
    // {
    //     title: "Warmth",
    //     name: "warmth",
    //     icon: 'fas fa-thermometer-half',
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // },
    {
        title: "Saturation",
        name: "saturation",
        icon: "fas fa-tint",
        defaultValue: 100,
        maxValue: 200,
        minValue: 0
    },
    // {
    //     title: "Colour",
    //     name: "colour",
    //     icon: "fas fa-rainbow",
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // },
    // {
    //     title: "Fade",
    //     name: "fade",
    //     icon: "fas fa-cloud",
    //     defaultValue: 0,
    //     maxValue: 10,
    //     minValue: 0
    // },
    // {
    //     title: "Highlights",
    //     name: "highlights",
    //     icon: "fas fa-circle",
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // },
    // {
    //     title: "Shadows",
    //     name: "shadows",
    //     icon: "fas fa-moon",
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // },
    // {
    //     title: "Vignette",
    //     name: "vignette",
    //     icon: "fas fa-dot-circle",
    //     defaultValue: 100,
    //     maxValue: 200,
    //     minValue: 0
    // }
]

export default function EditTab({isEditing,setIsEditing,onEditSliderChangeHandler}:
        {
            isEditing: boolean;
            setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
            editValues: any;
            onEditSliderChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
        }
    ) {

    const [currentEditSelected, setCurrentEditSelected] = React.useState("");
    const [defaultValue, setDefaultValue] = React.useState(0);
    const [minValue, setMinValue] = React.useState(0);
    const [maxValue, setMaxValue] = React.useState(0);

    const onClickHandler = (name: string, defaultValue: number, minValue: number, maxValue: number) => {
        setIsEditing(true);
        setCurrentEditSelected(name);
        setDefaultValue(defaultValue);
        setMinValue(minValue);
        setMaxValue(maxValue);
    }

    if(isEditing) {
        return (
            <div className="edit__photo__component__upper__bottom__tab">
                <div className="input__slider__container">
                    <input
                    name={currentEditSelected}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => onEditSliderChangeHandler(e)}
                    type="range" defaultValue={defaultValue} max={maxValue} min={minValue} />
                </div>
            </div>
        )
    }
    return (
        <div className="edit__photo__component__upper__bottom__tab">
            {
                edits.map(e => (
                    <div className="edit" key={e.title} onClick={() => onClickHandler(e.name, e.defaultValue, e.minValue, e.maxValue)}>
                        <p>{e.title}</p>
                        <div className="icon__holder">
                            <i className={e.icon}></i>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
