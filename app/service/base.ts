import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://8fb5-2804-2370-ba00-ab8-9b9-9132-61ea-9b94.ngrok-free.app/',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
})
