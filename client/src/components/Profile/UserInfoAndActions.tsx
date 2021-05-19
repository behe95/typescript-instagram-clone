import React from "react";
import Actions from "./Actions";
import UserInfo from "./UserInfo";

import { useAuth } from "../../contexts/Auth.context";
import Header from "./Header";

export default function UserInfoAndActions({setShowOptions}: 
        {
            setShowOptions: React.Dispatch<React.SetStateAction<boolean>>
        }
    ) {
    const [info, setInfo] = React.useState({});

    const {setIsAuthenticated, userInfo} = useAuth();

    React.useEffect(() => {
        // axios
        //     .get('api/profile/info', {withCredentials:true})
        //     .then(res => {
        //         console.log(res);     
        //         setInfo({...res.data})           
        //     }).catch(err => {
        //         if(err.response.status === 401) setIsAuthenticated(false);             
        //     })

        setInfo(info => ({...info,...userInfo}))
    },[setIsAuthenticated, userInfo])
    return (
        <>
            <Header 
            setShowOptions={setShowOptions}
            info={info} />
            <UserInfo
            info={info}
            />
            <Actions />
        </>
    )
}