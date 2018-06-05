import axios from 'axios';

export async function fetchFeed(userId) {
    return await axios.get(`http://localhost:3000/api/user/${userId}/feed`, {
        withCredentials: true
    });
}

export async function fetchFeedByCategory(userId, categoryName) {
    return await axios.get(`http://localhost:3000/api/user/${userId}/feed/${categoryName}`, {
        withCredentials: true
    });
}
