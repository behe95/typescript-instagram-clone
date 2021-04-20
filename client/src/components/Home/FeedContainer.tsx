import React from "react";
import FeedItem from "./FeedItem";


const data = [
    {username:"user.one",img:"/static/images/portrait/portrait1.jfif"},
    {username:"user.2",img:"/static/images/portrait/portrait2.jfif"},
    {username:"user.three",img:"/static/images/portrait/portrait3.jfif"},
    {username:"user.4",img:"/static/images/portrait/portrait4.jfif"},
    {username:"user.five",img:"/static/images/portrait/portrait5.jfif"},
]

export default function FeedContainer() {
    return (
        <div id="home__feed__container">
            {
                data.map(d => (
                    <FeedItem
                        key={d.username}
                        username={d.username}
                        img={d.img}
                    />
                ))
            }
        </div>
    )
}