import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { useAuth } from "../contexts/Auth.context";
import LoaderComponent from "./LoaderComponent";

interface RouteProps{
    exact: boolean;
    path: string;
    component: React.FC<RouteComponentProps>

}

export default function AuthRoute({component: Component, ...rest}:RouteProps){
    const {isAuthenticated, authContextIsLoading} = useAuth()
    console.log("ISAUTHENTINCATED ==================================== ", isAuthenticated);
    
    console.log("LOADING ================================ ",authContextIsLoading);
    
    return (
        <>
            {
                authContextIsLoading ?
                <LoaderComponent /> :
                <Route
                    {...rest}
                    render={props => (
                        isAuthenticated ? 
                        <Component {...props} />
                        :
                        <Redirect to="/" />
                    )}
                />
            }
        </>
    )
    

    // return <Route
    //     {...rest}
    //     render={props => (
    //         isAuthenticated ? 
    //         <Component {...props} />
    //         :
    //         <Redirect to="/" />
    //     )}
    // />
}