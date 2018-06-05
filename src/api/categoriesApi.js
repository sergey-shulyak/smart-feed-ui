import axios from 'axios';

export async function fetchAllCategories() {
    return await axios.get('http://localhost:3000/api/categories', {
        withCredentials: true
    });
}

export async function addUserCategory(userId, categoryId) {
    return await axios.post(`http://localhost:3000/api/user/${userId}/categories`, {categoryId}, {
        withCredentials: true
    });
}

export async function removeUserCategory(userId, categoryId) {
    return await axios.delete(`http://localhost:3000/api/user/${userId}/categories/${categoryId}`, {
        withCredentials: true
    });
}