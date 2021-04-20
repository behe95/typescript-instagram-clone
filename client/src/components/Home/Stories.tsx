import React from "react";


const data = [
    {username:"user.one",img:"/static/images/portrait/portrait1.jfif"},
    {username:"user.2",img:"/static/images/portrait/portrait2.jfif"},
    {username:"user.three",img:"/static/images/portrait/portrait3.jfif"},
    {username:"user.4",img:"/static/images/portrait/portrait4.jfif"},
    {username:"user.five",img:"/static/images/portrait/portrait5.jfif"},
    {username:"user.one",img:"/static/images/portrait/portrait1.jfif"},
    {username:"user.2",img:"/static/images/portrait/portrait2.jfif"},
    {username:"user.three",img:"/static/images/portrait/portrait3.jfif"},
    {username:"user.4",img:"/static/images/portrait/portrait4.jfif"},
    {username:"user.five",img:"/static/images/portrait/portrait5.jfif"},
]

export default function Stories() {
    return (
        <div id="home__stories__component">
            {
                data.map((d,i) => (
                    <div key={i} className="story">
                        <img src={`${d.img}`} alt={`${d.username}`}/>
                        <p>{d.username}</p>
                    </div>
                ))
            }
        </div>
    )
}