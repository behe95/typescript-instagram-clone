import React from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";

interface InitContextProps {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
    login: ({...data}:{
        user: string,
        password: string,
        loginUsing: string
    }) => void;
}

const AuthContext = React.createContext({} as InitContextProps);

export const useAuth = () => {
    return React.useContext(AuthContext);
}


export const AuthProvider = ({children}:any) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(() => Cookie.get('JWT__AUTH__TOKEN') ? true : false);
    
    const isMounted = React.useRef(true);

    const history = useHistory();

    React.useEffect(() => {
        const JWT__AUTH__TOKEN = Cookie.get('JWT__AUTH__TOKEN');
        if(JWT__AUTH__TOKEN) setIsAuthenticated(b => true);
        return () => {
            isMounted.current = false;
        }
    },[])
    console.log(isAuthenticated);
    
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
        login
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}