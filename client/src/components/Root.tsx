import React from "react";

interface Props{
    children: JSX.Element[] | JSX.Element
}

export default function Root(props: Props){

    const {children} = props;
    return(
        <div
        id="appRoot"
        >
            {children}
        </div>
    )
}