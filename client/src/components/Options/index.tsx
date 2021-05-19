import React from 'react'
import Header from './Header'
import './Options.scss'
import socialSvg from './svg'

const accountData = ["Edit Profile", "Nametag", "Change Password", "Privacy and Security", "Login Activity", "Emails from Instagram"];

const settingsData = ["Language", "Apps and Website", "Notifications"];

const aboutData = ["Ads", "Help Center", "Report a Problem", "More"];

export default function Options({setShowOptions}: {
    setShowOptions: React.Dispatch<React.SetStateAction<boolean>>
}) {
    return (
        <div id="options__component">
            <Header
                setShowOptions={setShowOptions}
            />

            <div id="options__component__list__container">
                <div>
                    <div className="options__component__list__header">
                        <p>ACCOUNT</p>
                    </div>
                    
                    <ul className="options__component__list account__list">
                        {
                            accountData.map(d => <li className="options__component__list__item" key={d}>
                                <p>{d}</p>
                                <button onClick={() => {}}>
                                <span style={{display: "inline-block", transform: "rotate(90deg)"}}><svg aria-label="Back" className="edit__profile__header__svg" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span>
                                </button>
                            </li>)
                        }
                    </ul>

                    <div className="options__component__social__icons__container">
                        <p className="link">Switch to Professional Account</p>

                        <div className="options__component__social__icons">
                            <svg aria-label="Facebook wordmark and family of apps logo" className="_8-yf5 " fill="#262626" height="12" viewBox="0 0 771.7 44" width="200"><path clip-rule="evenodd" d={socialSvg} fillRule="evenodd"></path></svg>
                        </div>

                        <p className="link">Accounts Center</p>

                        <p className="text">Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in.</p>
                    </div>
                    
                    
                    <div className="options__component__list__header">
                        <p>SETTINGS</p>
                    </div>
                    <ul className="options__component__list settings__list">
                        {
                            settingsData.map(d => <li className="options__component__list__item" key={d}>
                            <p>{d}</p>
                            <button onClick={() => {}}>
                            <span style={{display: "inline-block", transform: "rotate(90deg)"}}><svg aria-label="Back" className="edit__profile__header__svg" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span>
                            </button>    
                            </li>)
                        }
                    </ul>

                    <div className="options__component__list__header">
                        <p>ABOUT</p>
                    </div>
                    <ul className="options__component__list">
                        {
                            aboutData.map(d => <li className="options__component__list__item" key={d}>
                            <p>{d}</p>
                            <button onClick={() => {}}>
                            <span style={{display: "inline-block", transform: "rotate(90deg)"}}><svg aria-label="Back" className="edit__profile__header__svg" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span>
                            </button>    
                            </li>)
                        }
                    </ul>

                    <ul className="options__component__list logout__list">
                        <li className="options__component__list__item">
                        <p>Log Out</p>
                        <button onClick={() => {}}>
                        <span style={{display: "inline-block", transform: "rotate(90deg)"}}><svg aria-label="Back" className="edit__profile__header__svg" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span>
                        </button>   
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



