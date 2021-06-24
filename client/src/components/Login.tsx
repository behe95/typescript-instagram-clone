import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';
import "./Login.scss"

import { validateEmail, validateNumber } from "../utils/formValidators";

import { useAuth } from "../contexts/Auth.context";

interface dataInterFace{
    user: string,
    password: string,
    loginUsing: string
}

const dataInit:dataInterFace = {
    user: "",
    password: "",
    loginUsing: ""
}

export default function Login() {
    // console.log("RENDERING ========================== Login");

    const history = useHistory();

    const [data,setData] = React.useState<dataInterFace>(dataInit);
    const [isValid,setIsValid] = React.useState<boolean>(false);

    const isMounted = React.useRef(true);

    const {login} = useAuth();

    const [isLoginLoading,setIsLoginLoading] = React.useState(false);


    React.useEffect(() => {

        let key:keyof dataInterFace;
        for (key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key) && key !== 'loginUsing') {
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

    

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onclickLogin = async () => {
        if(!isValid) return;
        
        const {user} = data;
        

        // if(!validateNumber(user) && !validateEmail(user)) setData({...data, loginUsing: 'username'})

        // if(validateNumber(user)) setData({...data, loginUsing: 'phone'});
        // if(validateEmail(user)) setData({...data, loginUsing: 'email'});

      

        // await login({...data, loginUsing:data.loginUsing});

        setIsLoginLoading(true);

        
        if(!validateNumber(user) && !validateEmail(user)){
            await login({...data, loginUsing:"username"});
        }else if(validateNumber(user)){
            await login({...data, loginUsing:"phone"});
        }else if(validateEmail(user)){
            await login({...data, loginUsing:"email"});
        }
      
        
        
        
    }

    console.log("LOADING ====================== ", isLoginLoading);
    

    const onclickLoginWithFacebook = () => {
        console.log("FACEBOOK LOGIN BUTTON CLICKED");
        history.push("/home")
        
    }

    return (
        <div className="login__component">

            <button
            onClick={onclickLoginWithFacebook}
            className="btn btn-primary btn-sm facebook__button"
            >Continue with Facebook</button>

            <div className="or">
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <div>
                <form className="login__form">
                    <div className="form-group">
                        <input
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
                        name="user"
                        value={data.user}
                        placeholder="Phone number, username, or email" 
                        type="text" 
                        className="form-control"/>
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
                <Link className="forgot__pass__link" to="/accounts/password/reset">Forgot Password?</Link>
                <button
                onClick={() => onclickLogin()}
                className={`btn btn-primary btn-sm ${!isValid ? 'disabled' : ''} login__button`}
                >
                    {
                        isLoginLoading ? 
                        <div className="spinner-grow spinner-grow-sm" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        :
                        "Log In"                    
                    }
                </button>

                <p>Don't have an account? <span
                    onClick={() => history.push('/accounts/emailsignup')}
                >Sign up</span></p>
            </div>

        </div>
    )
}