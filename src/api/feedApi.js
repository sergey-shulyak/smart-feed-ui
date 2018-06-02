import axios from 'axios';

export async function fetchFeed(userId) {
    return await axios.get(`http://localhost:3002/users/${userId}`, {//TODO изменить с новой апи
        withCredentials: true
    });
}
