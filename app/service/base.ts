import axios from 'axios'
import { API_URL } from 'react-native-dotenv'

export const instance = axios.create({
    baseURL: API_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
})
