import React from "react";
import "./ForgotPassword.scss";

import { useHistory } from "react-router-dom";

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

export default function ForgotPassword() {

    const history = useHistory();
    return (
        <div id="forgot__password__component">

            <div className="header">
                <img className="instagram__logo__text" src="/static/images/instagram-logo-text.png" alt="instagram-logo-text"/>
            </div>

            <div className="body">
                <img className="padlock__image" src="/static/images/padlock.png" alt="padlock"/>
                
                <p className="title">Trouble Logging In?</p>

                <p className="subtitle">Enter your email, phone or username and we'll send you a link to get back into your account</p>

                <form className="forgot__pass__form">
                    <div className="form-group">
                        <input
                        placeholder="Email, Phone or Username" 
                        type="text" 
                        className="form-control"/>
                    </div>
                </form>

                <button
                className="btn btn-primary btn-sm send__login__link__button disabled"
                >Send Login Link</button>

                <div className="or">
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <p
                onClick={() => history.push("/accounts/emailsignup")} 
                className="sign__up__text">Create New Account</p>
            </div>

            <div
            onClick={() => history.push({pathname:"/", state:{from:"/accounts/password/reset"}})}
            className="back__to__login__holder">
                <p>Back To Login</p>
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
                            <select className="form-select form-control form-control-sm" aria-label="Default select example">
                                <option selected>English</option>
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