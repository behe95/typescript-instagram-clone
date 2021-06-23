import * as TYPES from "../types";
import axios from 'axios';
import * as API from '../../api';


export const logoutUser = () =>  async (dispatch: any) => {
    

    axios
        .get(API.LOGOUT, {withCredentials: true})
        .then(res => {})
        .catch(err => console.log(err));
    
    localStorage.removeItem('JWT__AUTH__TOKEN');
    localStorage.removeItem('JWT__REFRESH__TOKEN');

    dispatch({
        type: TYPES.LOGOUT
    })

    return new Promise<boolean>((resolve, _) => {
        resolve(true);
    })

}