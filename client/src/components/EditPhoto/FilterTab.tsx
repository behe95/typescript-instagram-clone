import React from 'react'

const filters = [
    {
        name: "normal"
    },
    {
        name: "Clarendon"
    },
    {
        name: "Gingham"
    },
    {
        name: "Moon"
    },
    {
        name: "Lark"
    },
    {
        name: "Reyes"
    },
    {
        name: "Juno"
    },
    {
        name: "Slumber"
    },
    {
        name: "Crema"
    },
    {
        name: "Ludwig"
    },
    {
        name: "Aden"
    },
    {
        name: "Perpetua"
    }
]

export default function FilterTab() {
    return (
        <div className="edit__photo__component__upper__bottom__tab">
            {
                filters.map(f => (
                    <div className="filter" key={f.name}>
                        <p>{f.name}</p>
                        <img src="/static/images/filter.jpg" alt={f.name} />
                    </div>
                ))
            }
        </div>
    )
}
