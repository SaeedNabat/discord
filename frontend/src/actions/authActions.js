import * as api from '../servieces/api'
import { openAlertMessage } from './alertActions'
export const authActions = {
    SET_USER:"AUTH.SET_USER"
};

export const getActions = (dispatch)=>{
    return {
        login: (userDetails,history)=>dispatch(login(userDetails,history)),
        register: (userDetails, history)=>{
            dispatch(register(userDetails, history))
        },
        setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails))
    }
}
const setUserDetails = (userDetails)=>{
    return {
        type: authActions.SET_USER,
        userDetails
    }
}
const login = (userDetails, navigate) => {
    return async (dispatch) => {
        console.log(userDetails)
        const response = await api.login(userDetails);
        console.log(response)
        if(response.error){
            dispatch(openAlertMessage(response?.exception?.response?.data?.error));
        }else{
            const { user } = response?.data;
            localStorage.setItem('user',JSON.stringify(user));
            dispatch(setUserDetails(userDetails));
            navigate('/dashboard');
        }
    }
}
const register = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.register(userDetails);
        if(response.error){
            dispatch(openAlertMessage(response?.exception?.response?.data?.error))
        }else{
            const { user } = response?.data;
            localStorage.setItem('user',JSON.stringify(user));
            dispatch(setUserDetails(userDetails));
            navigate('/dashboard');
        }
    }
}