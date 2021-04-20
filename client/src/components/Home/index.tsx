import axios from "axios";
import React from "react";
import BottomNavigationMenu from "../BottomNavigationMenu";
import FeedContainer from "./FeedContainer";
import Header from "./Header";

import "./Home.scss";
import Stories from "./Stories";

export default function Home() {

    React.useEffect(() => {
        console.log("HOME ==============");
        
        axios
            .get('api/home',{withCredentials:true})
            .then(res => {
                console.log(res);                
            }).catch(err => {
                console.log(err);                
            })
    },[])
    return (
        <div id="home__component">
            <Header/>
            <Stories/>
            <FeedContainer />
            <BottomNavigationMenu />
        </div>
    );
}