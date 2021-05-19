import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Signup.scss";

import axios from "axios";

import { validateEmail, validateNumber } from "../utils/formValidators";

import * as API from '../api'

const footerContentsTop = [
    {title: "About"},
    {title: "Blog"},
    {title: "Jobs"},
    {title: "Help"},
    {title: "API"},
    {title: "Privacy"},
    {title: "Terms"},
    {title: "Top Accounts"},
    {title: "Hashtags"},
    {title: "Locations"},
]

interface dataInterFace{
    user: string,
    password: string,
    username: string,
    fullName: string,
    registeredUsing: string
}

const dataInit:dataInterFace = {
    user: "",
    password: "",
    username: "",
    fullName: "",
    registeredUsing: ""
}



export default function Signup() {

    const history = useHistory();
    const [data,setData] = useState<dataInterFace>(dataInit)
    const [isValid,setIsValid] = React.useState<boolean>(false);

    const isMounted = React.useRef(true);

    useEffect(() => {

        let key:keyof dataInterFace;
        for (key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key) && key !== 'registeredUsing') {
                if(!data[key] && isValid) return setIsValid(b => !b);
                if(!data[key]) return;
            }
        }
        setIsValid(true);

        return () => {
            isMounted.current = false;
        }
        // eslint-disable-next-line
    },[data])

    console.log(data,isValid);
    
    

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onclickLoginWithFacebook = () => {
        history.push("/home")
    }

    const onclickSignup = () => {
        if(!isValid) return;
        
        const {user} = data;
        console.log(validateEmail(user),validateNumber(user));
        

        if(!validateNumber(user) && !validateEmail(user)) return;

        // if(validateNumber(user)) setData({...data, registeredUsing: 'phone'});
        // if(validateEmail(user)) setData({...data, registeredUsing: 'email'});

        // axios
        //     .post('api/auth/register',{...data, registeredUsing: data.registeredUsing})
        //     .then(res => {
        //         console.log(res);
                
        //     }).catch(err => {
        //         // const {data} = err.response;
        //         // console.log(data);
        //         console.log(err);
        //     })


        if(validateNumber(user)){
            axios
            .post(API.REGISTER,{...data, registeredUsing: "phone"})
            .then(res => {
                console.log(res);
                
            }).catch(err => {
                // const {data} = err.response;
                // console.log(data);
                console.log(err);
            })
        }else if(validateEmail(user)){
            axios
            .post(API.REGISTER,{...data, registeredUsing: "email"})
            .then(res => {
                console.log(res);
                
            }).catch(err => {
                // const {data} = err.response;
                // console.log(data);
                console.log(err);
            })
        }



        // history.push("/",{from: history.location.pathname})
    }
    

    return (
        <div id="signup__component">
            <div className="signup__component__header">
                <img className="instagram__logo__text__image" src="/static/images/instagram-logo-text.png" alt="instagram-logo-text"/>

                <p className="text__description">Sign up to see photos and videos from your friends</p>

                <button
            onClick={onclickLoginWithFacebook}
            className="btn btn-primary btn-sm facebook__button"
            >Log in with Facebook</button>

                <div className="or">
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
            </div>        

                <div>
                    <form className="signup__form">
                        <div className="form-group">
                            <input
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
                            name="user"
                            value={data.user}
                            placeholder="Mobile Number or Email" 
                            type="text" 
                            className="form-control"/>
                            <input
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
                            name="fullName"
                            value={data.fullName}
                            placeholder="Full Name"
                            type="text"
                            className="form-control"
                            />
                            <input
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
                            name="username"
                            value={data.username}
                            placeholder="Username"
                            type="text"
                            className="form-control"
                            />

                            <input
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
                            name="password"
                            value={data.password}
                            placeholder="Password" 
                            type="password"
                            className="form-control"/>

                            
                        </div>
                    </form>
                </div>

                <div className="bottom">
                    <button
                    onClick={() => onclickSignup()}
                    className={`btn btn-primary btn-sm ${!isValid ? 'disabled' : ''} login__button`}
                    >
                        Sign up
                    </button>

                    <p>By signing up, you agree to our
                        <span> Terms, Data Policy and Cookies Policy</span>
                    </p>
                </div>

                <div className="store__icon__holder">
                    <p className="login__text">Have an account? <span
                    onClick={() => history.push({pathname:"/",state:{from:"/accounts/emailsignup"}})}>Log in</span></p>

                    <p className="get__the__app__text">Get the app</p>

                    <div className="store__icon__images">
                    <img src="/static/images/appstore-install-badges-badge_ios_english-en.png-180ae7a0bcf7.png" alt="appstore-install-badges-badge_ios_english-en.png-180ae7a0bcf7"/>
                    <img src="/static/images/appstore-install-badges-badge_android_english-en.png-e9cd846dc748.png.png" alt="appstore-install-badges-badge_android_english-en.png-e9cd846dc748"/>
                    </div>
                </div>


                <div className="footer">

                    <div className="top">
                        {
                            footerContentsTop.map(c => (
                                <p
                                key={c.title}
                                className="footer__content"
                                >{c.title}</p>
                            ))
                        }
                    </div>
                    <div className="bottom">
                        <form>
                            <div className="form-group">
                                <select defaultValue="0" className="form-select form-control form-control-sm" aria-label="Default select example">
                                    <option value="0">English</option>
                                    <option value="1">English(UK)</option>
                                    <option value="2">French</option>
                                    <option value="3">Deutsch</option>
                                </select>
                            </div>
                        </form>

                        <p>&copy; 2021 Instagram from Facebook</p>
                    </div>

                </div>

                
            
        </div>
    )
}