import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";


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

interface PropPost{
    src: string,
    number: number
}

export function Post(props: PropPost) {

    const {src,number} = props;

    const getMarginClass = (key:number) => {
             
        
        if(key <=2 ) {

            switch (key) {
                case 0:
                    return "removeTopBorder rightBottomBorder"
                case 1:
                    return "removeTopBorder allsideBorder"
                case 2:
                    return "removeTopBorder leftBottomBorder"
                default:
                    break;
            }
        }
        
        switch (key%3) {
            case 0:
                return "rightBottomBorder"
            case 1:
                return "allsideBorder"
            case 2:
                return "leftBottomBorder"
            default:
                break;
        }
    }

    return (
        <div className={`profile__post col-4 ${getMarginClass(number)}`}>
            <img src={`${src}`} alt="image__post" />
        </div>
    )
}

export default function Posts() {
    const {photos:userProfilePhotos} = useSelector((state:RootState) => state.auth);

    return (
        <div className="profile__posts__container">
            <div className="row no-gutters">
            {
                (userProfilePhotos as NonNullable<Array<Object>>).map((d:any,key:number) => (
                    <Post number={key} key={key} src={d.url} />
                ))
            }
            </div>
            
        </div>
    )
}