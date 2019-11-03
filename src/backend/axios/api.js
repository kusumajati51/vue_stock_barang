import axios from 'axios';
import {config} from "@vue/test-utils";

const API_URL = 'http://192.168.43.238:3000/api/v1';

// export default axios.create({
//     baseURL: API_URL,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

const securedAxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const plainAxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


securedAxiosInstance.interceptors.request.use(config =>{
   const method = config.method.toUpperCase()
    if(method !== 'OPTIONS'&& methos !== 'GET'){
        config.headers = {
        ...config.headers,
            'Authorization': localStorage.token
        }
    }
    return config;
});

export {plainAxiosInstance, securedAxiosInstance,API_URL}

