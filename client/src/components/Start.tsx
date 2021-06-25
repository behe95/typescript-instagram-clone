import React, { Dispatch, SetStateAction, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";

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

const footerContentsBottom = [    
    {title: "Beauty"},
    {title: "Dance & Performance"},
    {title: "Fitness"},
    {title: "Food & Drink"},
    {title: "Home & Garden"},
    {title: "Music"},
    {title: "Visual Arts"},
]

const StartComponentTop = React.memo(() => {
    // console.log("RENDERING ========================== StartComponentTop");
    return (
        <div className="top">
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
        </div>
    );
})

const StartBottomComponent = React.memo(() => {

    // console.log("RENDERING ========================== StartBottomComponent");
    return (
        <div className="bottom">
            <div className="copyright">
                <p>from</p>
                <h6>FACEBOOK</h6>
            </div>

            <footer className="footer">
                <div className="top">
                    {
                        footerContentsTop.map(c => (
                            <p
                            key={c.title}
                            className="footer__content">
                                {c.title}
                            </p>
                        ))
                    }
                </div>

                <div className="bottom">
                    {
                        footerContentsBottom.map(c => (
                            <p
                            key={c.title}
                            className="footer__content"
                            >{c.title}</p>
                        ))
                    }
                </div>
            </footer>
        </div>
    );
})

interface PropsStartMidComponent{
    setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const  StartMidComponent = (props:PropsStartMidComponent) => {

    const {setShowLogin} = props;

    // console.log("RENDERING ========================== StartMidComponent");
    

    return (
        <div className="mid">
            <img className="instagram__logo__text__image" src="/static/images/instagram-logo-text.png" alt="instagram-logo-text"/>
            <p className="text__description">Sign up to see photos and videos from your friends</p>
            <img className="google__play__button__image" src="static/images/appstore-install-badges-badge_android_english-en.png-e9cd846dc748.png.png" alt="appstore-install-badges-badge_android_english-en.png-e9cd846dc748"/>
            
            <div className="auth__links">
                <p
                onClick={() => setShowLogin(showLogin => !showLogin)}
                className="link">Log In</p>
                <p>or</p>
                <Link className="link" to="/accounts/emailsignup">Sign Up</Link>
            </div>
        </div>
    );
}

interface LocationState{
    from: string
}

interface PropTypes{
    history: any
}

export default function Start({history}:PropTypes){

    // const history = useHistory();
    const location = useLocation<LocationState>();

    const [showLogin,setShowLogin] = React.useState<boolean>(() => {
        const { from } = location.state || {from: '/'};
        if(from !== '/') return true;
        return false
    });

    React.useEffect(() => {
        localStorage.clear();
    },[])

    const isMounted = React.useRef(true);
    useCallback(() => {
        history.replace({
            ...history.location,
            state: undefined
        });
        // eslint-disable-next-line
      },[])

    React.useEffect(() => {
        if(isMounted.current){
            // window.addEventListener('onbeforeunload', resetLocation);
            // const { from } = location.state || {from: '/'};
            // if(from !== '/') setShowLogin(b => !b);  
            window.history.replaceState({}, document.title)          
        }

        

        return () => {
            isMounted.current = false;
        }
    },[])

    return(
        <div id="start__component">

            <StartComponentTop />


            {
                showLogin ? 
                <Login />
                :
                <StartMidComponent
                    setShowLogin={setShowLogin}
                />
            }


            <StartBottomComponent />
        </div>
    )
}