import React from 'react'
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/actions/upload'

const filters = [
    {
        name: "normal",
        filter: null
    },
    {
        name: "Clarendon",
        filter: "contrast(96%) saturate(169%) hue-rotate(2deg) brightness(116%) blur(0px) sepia(15%) invert(3%) grayscale(6%)"
    },
    {
        name: "Gingham",
        filter: "contrast(106%) saturate(87%) hue-rotate(24deg) brightness(116%) blur(0.5px) sepia(14%) invert(1%) grayscale(1%)"
    },
    {
        name: "Moon",
        filter: "contrast(120%) saturate(0%)"
    },
    {
        name: "Lark",
        filter: "contrast(106%) saturate(170%) hue-rotate(10deg) brightness(106%) blur(0.2px) sepia(3%) invert(1%) grayscale(0%)"
    },
    {
        name: "Reyes",
        filter: "contrast(107%) saturate(273%) hue-rotate(10deg) brightness(126%) blur(0.1px) sepia(30%) invert(11%) grayscale(10%)"
    },
    {
        name: "Juno",
        filter: "contrast(77%) saturate(91%) hue-rotate(16deg) brightness(92%) blur(0.1px) sepia(100%) invert(2%) grayscale(2%) drop-shadow(-2px -4px 6px black)"
    },
    {
        name: "Slumber",
        filter: "contrast(187%) saturate(21%) hue-rotate(6deg) brightness(92%) blur(0.1px) sepia(32%) invert(2%) grayscale(2%)"
    },
    {
        name: "Crema",
        filter: "contrast(187%) saturate(62%) hue-rotate(5deg) brightness(92%) blur(0.4px) sepia(7%) invert(8%) grayscale(32%)"
    },
    {
        name: "Ludwig",
        filter: "contrast(87%) saturate(162%) hue-rotate(15deg) brightness(90%) blur(0.1px) sepia(17%) invert(2%) grayscale(10%)"
    },
    {
        name: "Aden",
        filter: "contrast(87%) saturate(102%) hue-rotate(5deg) brightness(40%) blur(0.1px) sepia(17%) invert(2%) grayscale(10%)"
    },
    {
        name: "Perpetua",
        filter: "contrast(57%) saturate(21%) hue-rotate(16deg) brightness(92%) blur(0.1px) sepia(100%) invert(2%) grayscale(2%) drop-shadow(-2px -4px 6px black)"
    }
]

export default function FilterTab() {
    const dispatch = useDispatch();
    return (
        <div className="edit__photo__component__upper__bottom__tab">
            {
                filters.map(f => (
                    <div className="filter" key={f.name} onClick={() => dispatch(setFilter(f.filter as string))}>
                        <p>{f.name}</p>
                        <img src="/static/images/filter.jpg" alt={f.name} />
                    </div>
                ))
            }
        </div>
    )
}
