import axios from 'axios';

export async function logIn(data) {
    return await axios.post('http://localhost:3000/login', data, {
        withCredentials: true
    });
}

export async function relogin() {
    return await axios.post('http://localhost:3000/relogin', {}, {
        withCredentials: true
    });
}

export async function register(data) {
    return await axios.post('http://localhost:3000/register', data, {
        withCredentials: true
    });
}