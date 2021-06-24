import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../../contexts/Auth.context';
import { RootState } from '../../store/reducers';
import { validateEmail, validateNumber } from '../../utils/formValidators';

interface initialStateTypes{
    fullName: string;
    username: string;
    website?: string;
    email?: string;
    bio?: string;
    phone?: string;
    gender?: string;
    isSuggestSimilarAccount?: boolean;
}



interface actionTypes{
    type: string;
    payload: any //React.ChangeEvent<HTMLInputElement> // | React.ChangeEvent<HTMLTextAreaElement>
}

const initialState:initialStateTypes = {
    fullName: "",
    username: "",
    email: "",
    website: "",
    bio: "",
    phone: "",
    gender: "",
    isSuggestSimilarAccount: false
}

function reducer(state:any, action: actionTypes){
    
    switch (action.type) {
        case 'gender':
            return {...state, gender: action.payload.target.value}
        case 'formData':
            if (action.payload.target.name === "isSuggestSimilarAccount"){
                return {...state, [action.payload.target.name]: action.payload.target.checked}
            }
            return {...state, [action.payload.target.name]: action.payload.target.value}
        case 'initState':
            // console.log(action.payload);
            
            return {...state,...action.payload};
        default:
            return state;
    }
}

export default function useForm(){
    const {user:userProfileInfo} = useSelector((state:RootState) => state.auth);

    const [state, dispatch] = React.useReducer(reducer, userProfileInfo);

    // const {userInfo} = useAuth();

    

    // React.useEffect(() => {
    //     let info:initialStateTypes;
    //     // console.log("RENDERINGGGG");
        
    //     if(Object.keys(userInfo).length > 5){
    //         info = {
    //             ...userInfo
    //         }
    //     }else{
    //         info = {
    //             username: userInfo.username,
    //             fullName: userInfo.fullName
    //         }
    //     }
        

    //     if(validateNumber(userInfo.user)){
    //         info = {
    //             ...info,
    //             phone: userInfo.user
    //         }
    //     }else if(validateEmail(userInfo.user)){
    //         info = {
    //             ...info,
    //             email: userInfo.user
    //         }
    //     }

    //     dispatch({type:"initState", payload: info})
        
    // },[userInfo])

    return [state, dispatch];
}