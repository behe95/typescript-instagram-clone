import React from "react";
import BottomNavigationMenu from "./BottomNavigationMenu";

import "./Search.scss";

const data = [
    {username:"user.one",img:"/static/images/portrait/portrait1.jfif", contentType: "img"},
    {username:"user.2",img:"/static/images/portrait/portrait2.jfif", contentType: "img"},
    {username:"user.three",img:"/static/images/portrait/portrait3.jfif", contentType: "video"},
    {username:"user.4",img:"/static/images/portrait/portrait4.jfif", contentType: "video"},
    {username:"user.five",img:"/static/images/portrait/portrait5.jfif", contentType: "img"},
    {username:"user.one",img:"/static/images/portrait/portrait1.jfif", contentType: "img"},
    {username:"user.2",img:"/static/images/portrait/portrait2.jfif", contentType: "img"},
    {username:"user.2",img:"/static/images/portrait/portrait2.jfif", contentType: "img"},
    {username:"user.2",img:"/static/images/portrait/portrait2.jfif", contentType: "img"},
    {username:"user.2",img:"/static/images/portrait/portrait2.jfif", contentType: "img"},
    {username:"user.2",img:"/static/images/portrait/portrait2.jfif", contentType: "img"},
    {username:"user.2",img:"/static/images/portrait/portrait2.jfif", contentType: "img"},
    {username:"user.2",img:"/static/images/portrait/portrait2.jfif", contentType: "img"},
    {username:"user.three",img:"/static/images/portrait/portrait3.jfif", contentType: "video"},
    {username:"user.4",img:"/static/images/portrait/portrait4.jfif", contentType: "video"},
    {username:"user.five",img:"/static/images/portrait/portrait2.jfif", contentType: "video"},
    {username:"user.five",img:"/static/images/portrait/portrait2.jfif", contentType: "video"},
    {username:"user.five",img:"/static/images/portrait/portrait4.jfif", contentType: "img"},
    {username:"user.five",img:"/static/images/portrait/portrait1.jfif", contentType: "img"},
    
]



export default function Search() {
    return (
        <>
        <div id="search__component">
            <div className="header">
                <form className="search__form">
                    <div className="form-group">
                        <input
                        placeholder="Search" 
                        type="text" 
                        className="form-control"/>
                    </div>
                </form>
            </div>

            
            <div className="posts">
                {
                    data.map((d,i) => (
                        <div key={i} className={`post item-${d.contentType}`}>
                            <img src={`${d.img}`} alt="search__image"/>
                        </div>
                    ))
                }
            </div>

        </div>
        <BottomNavigationMenu />
        </>
    )
}