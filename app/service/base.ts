import axios from 'axios'
export const apiUrl = process.env.API_URL
export const instance = axios.create({
    baseURL: apiUrl,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
})
