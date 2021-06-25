import React from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";
import * as API from '../api'
import {useSnackbar} from 'notistack';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { getAllPhotos, getProfileInfo } from "../store/actions/auth";


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
    }) => Promise<void>;
    // setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
    // userInfo: userInfoType;
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
    // const [userInfo, setUserInfo] = React.useState({profilePhoto:{url: '/static/images/portrait/portrait1.jfif'}} as userInfoType);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    
    

    const isMounted = React.useRef(true);

    const history = useHistory();

    const {user:userProfileInfo, photos:userProfilePhotos} = useSelector((state:RootState) => state.auth)
    const dispatch = useDispatch();

    React.useEffect(() => {

        if(!Cookie.get('JWT__AUTH__TOKEN') || !Cookie.get("JWT__REFRESH__TOKEN")){
            setAuthContextIsLoading(false);
            return
        }

        (
            async function () {
                
                try {

                    const res = await checkAuth();
                    
                    if (res) {
                        setIsAuthenticated(true);
                        setAuthContextIsLoading(false);
                    }

                    if(!userProfileInfo){
                        await dispatch(getProfileInfo())
                    }
                    
                    

                    if((userProfilePhotos as Array<Object>).length == 0){
                        
                        await dispatch(getAllPhotos())
                    }


                } catch (error) {
                    console.log(error);
                    setAuthContextIsLoading(false);
                }
            }
        )()

        

        
        
        // if(isMounted.current && isAuthenticated){
        //     axios
        //         .get('/api/home',{withCredentials: true})
        //         .then(res => {
        //             setUserInfo(userInfo => { 
        //                 if(res.data.profilePhoto && res.data.profilePhoto.url){
        //                     return ({...userInfo,...res.data});                            
        //                 }
        //                 return ({...userInfo,...res.data, profilePhoto:{url: '/static/images/portrait/portrait1.jfif'}})
        //             });                
        //         }).catch(err => {
        //             console.log(err);                    
        //         })
        // }

        

        return () => {
            isMounted.current = false;
        }
    },[])
    
    const login = async ({...data}) => {
        if(isMounted.current){
            return new Promise<void>((resolve, reject) => {
                
            axios
            .post(API.LOGIN,{...data})
            .then(async (res) => {
                

                localStorage.setItem("JWT__AUTH__TOKEN", Cookie.get('JWT__AUTH__TOKEN')!);
                localStorage.setItem("JWT__REFRESH__TOKEN", Cookie.get('JWT__REFRESH__TOKEN')!);
                
                setIsAuthenticated(b => true);

                await dispatch(getProfileInfo());
                    
                    

                    
                await dispatch(getAllPhotos())

                enqueueSnackbar('User logged in successfully',{variant: 'success'});

                
                history.push('/home');

                resolve();

            }).catch(err => {
                // const {data} = err.response;
                // console.log(data);
                
                if(err.response){
                    enqueueSnackbar(err.response?.data?.message, {variant: 'error'});
                }else{
                    enqueueSnackbar(err.message, {variant: 'error'});

                }
                
                reject(err);
                
            })
            })
            
        }        
    }


    const value = {
        isAuthenticated,
        setIsAuthenticated,
        login,
        // userInfo,
        // setUserInfo,
        authContextIsLoading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}