import axios from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
const instance = axios.create({
    baseURL, 
    withCredentials: true,
    headers: {
        "API-KEY": "fcc6f648-92d4-45e1-856f-f33d6bb03d86"
    }
})

export const userAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    }
}

