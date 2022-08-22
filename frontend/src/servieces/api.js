import axios from 'axios'
import { logout } from '../utils/auth';

const http = axios.create({
    baseURL: "http://localhost:5002/api/v1",
    timeout: 1000
});

http.interceptors.request.use(config => {
    const user = localStorage.getItem('user');
    if(user){
        const token = JSON.parse(user).token;
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
},error=>{
    return Promise.reject(error)
})
// public routes
export const login = async (data)=>{
    try {
        return await http.post('/auth/login',data);
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export const register = async (data)=>{
    try {
        return await http.post('/auth/register',data);
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

// private routes

export const sendPeopleInvitation = async (data) => {
    try {
        return http.post('/people-invitation/invite', data);
    } catch (exception) {
        checkResponseCode(exception);
        return {
            error: true,
            exception
        }
    }
}

const checkResponseCode = (exception) => {
    const responseCode = exception?.response?.status;
    if(responseCode) 
    
    (responseCode === 401 || responseCode === 403) && logout();
}