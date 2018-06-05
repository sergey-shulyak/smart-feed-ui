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

export async function logout() {
    return await axios.get('http://localhost:3000/logout', {
        withCredentials: true
    });
}

export async function fetchCategories(userId) {
    return await axios.get(`http://localhost:3000/api/user/${userId}/categories`, {
        withCredentials: true
    });
}

export async function fetchIntegrations(userId) {
    return await axios.get(`http://localhost:3000/api/user/${userId}/socialIntegrations`, {
        withCredentials: true
    });
}