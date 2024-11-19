import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // Note: changed from BACKEND_URL
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
    },
    withCredentials: true,
})

// Add interceptors for debugging
axios.interceptors.request.use(config => {
    console.log('Request URL:', config.url);
    console.log('Request Method:', config.method);
    console.log('Base URL:', config.baseURL);
    return config;
}, error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => response,
    error => {
        console.error('Full Error Response:', error.response);
        return Promise.reject(error);
    }
);

export default axios
