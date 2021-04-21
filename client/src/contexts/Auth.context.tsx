import React from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";

interface userInfoType{
    user: string;
    username: string;
    registeredUsing: string;
    fullName: string;
    profilePhoto: {
        url: string,
        fileName?: string
    }
}

interface InitContextProps {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
    login: ({...data}:{
        user: string,
        password: string,
        loginUsing: string
    }) => void;
    setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
    userInfo: userInfoType;
}

const AuthContext = React.createContext({} as InitContextProps);

export const useAuth = () => {
    return React.useContext(AuthContext);
}


export const AuthProvider = ({children}:any) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(() => Cookie.get('JWT__AUTH__TOKEN') ? true : false);
    const [userInfo, setUserInfo] = React.useState({profilePhoto:{url: '/static/images/portrait/portrait1.jfif'}} as userInfoType);
    
    

    const isMounted = React.useRef(true);

    const history = useHistory();

    React.useEffect(() => {
        const JWT__AUTH__TOKEN = Cookie.get('JWT__AUTH__TOKEN');
        if(JWT__AUTH__TOKEN) setIsAuthenticated(b => true);
        console.log(isAuthenticated);
        
        if(isMounted.current && isAuthenticated){
            axios
                .get('/api/home',{withCredentials: true})
                .then(res => {
                    setUserInfo(userInfo => { 
                        if(res.data.profilePhoto && res.data.profilePhoto.url){
                            return ({...userInfo,...res.data});                            
                        }
                        return ({...userInfo,...res.data, profilePhoto:{url: '/static/images/portrait/portrait1.jfif'}})
                    });                
                }).catch(err => {
                    console.log(err);                    
                })
        }

        return () => {
            isMounted.current = false;
        }
    },[isAuthenticated])
    console.log(userInfo);
    
    const login = async ({...data}) => {
        if(isMounted.current){
            axios
            .post('api/auth/login',{...data})
            .then(res => {
                

                localStorage.setItem("JWT__AUTH__TOKEN", Cookie.get('JWT__AUTH__TOKEN')!);
                localStorage.setItem("JWT__REFRESH__TOKEN", Cookie.get('JWT__REFRESH__TOKEN')!);
                
                setIsAuthenticated(b => true);

                
                history.push('/home');

                

            }).catch(err => {
                // const {data} = err.response;
                // console.log(data);
                console.log(err);
                
                
            })
        }        
    }


    const value = {
        isAuthenticated,
        setIsAuthenticated,
        login,
        userInfo,
        setUserInfo
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}