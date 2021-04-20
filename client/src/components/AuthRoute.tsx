import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { useAuth } from "../contexts/Auth.context";

interface RouteProps{
    exact: boolean;
    path: string;
    component: React.FC<RouteComponentProps>

}

export default function AuthRoute({component: Component, ...rest}:RouteProps){
    const {isAuthenticated} = useAuth()
    console.log("ISAUTHENTINCATED ==================================== ", isAuthenticated);
    

    return <Route
        {...rest}
        render={props => (
            isAuthenticated ? 
            <Component {...props} />
            :
            <Redirect to="/" />
        )}
    />
}