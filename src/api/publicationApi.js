import axios from 'axios';

export async function fetchPublication(publicationId) {
    return await axios.get(`http://localhost:3000/api/publications/${publicationId}`, {
        withCredentials: true
    });
}
