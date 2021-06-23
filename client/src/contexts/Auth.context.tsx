import React from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import * as API from '../api'
import {useSnackbar} from 'notistack';

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
    authContextIsLoading: boolean;
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

const checkAuth = async () => {
    console.log("HELLO");
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.get('/api/auth/check',{withCredentials: true});
            return resolve(true);         
        } catch (error) {
            return reject(false);
        }
    })
}


export const AuthProvider = ({children}:any) => {
    const [authContextIsLoading, setAuthContextIsLoading] = React.useState(true);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({profilePhoto:{url: '/static/images/portrait/portrait1.jfif'}} as userInfoType);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    
    

    const isMounted = React.useRef(true);

    const history = useHistory();

    React.useEffect(() => {

        (
            async function () {
                
                try {

                    const res = await checkAuth();
                    
                    if (res) {
                        setIsAuthenticated(true);
                        setAuthContextIsLoading(false);
                    }

                } catch (error) {
                    console.log(error);
                    setAuthContextIsLoading(false);
                }
            }
        )()
        
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
    },[])
    
    const login = async ({...data}) => {
        if(isMounted.current){
            axios
            .post(API.LOGIN,{...data})
            .then(res => {
                

                localStorage.setItem("JWT__AUTH__TOKEN", Cookie.get('JWT__AUTH__TOKEN')!);
                localStorage.setItem("JWT__REFRESH__TOKEN", Cookie.get('JWT__REFRESH__TOKEN')!);
                
                setIsAuthenticated(b => true);
                enqueueSnackbar('User logged in successfully',{variant: 'success'});
                
                history.push('/home');

                

            }).catch(err => {
                // const {data} = err.response;
                // console.log(data);
                
                if(err.response){
                    enqueueSnackbar(err.response?.data?.message, {variant: 'error'});
                }else{
                    enqueueSnackbar(err.message, {variant: 'error'});

                }
                
                
            })
        }        
    }


    const value = {
        isAuthenticated,
        setIsAuthenticated,
        login,
        userInfo,
        setUserInfo,
        authContextIsLoading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}