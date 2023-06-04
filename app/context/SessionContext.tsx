import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ISession } from '../types/auth.type'
import { instance } from '../service/base'

type ISessionType = 'indoor' | 'outdoor' | 'load'
interface SessionContext {
    user: ISession
    setSession: React.Dispatch<React.SetStateAction<ISession>>
    event: ISessionType
    setEvent: React.Dispatch<React.SetStateAction<ISessionType>>
    saveOnDevice: (user: ISession) => Promise<void>
    getOnDevice: () => Promise<void>
    setInterceptor: (key: string) => void
    cleanOnDevice: () => Promise<void>
}

interface IProps {
    children: React.ReactNode
}

export const SessionContext = React.createContext({} as SessionContext)

export const SessionProvider: React.FC<IProps> = ({ children }) => {
    const [event, setEvent] = React.useState<ISessionType>('load')
    const [user, setSession] = React.useState<any>({})
    /**
     * Save session on device
     * @param session
     */
    const saveOnDevice = async (session: ISession) => {
        try {
            await AsyncStorage.setItem('session', JSON.stringify(session))
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * Get session on device
     * @returns
     */
    const getOnDevice = async () => {
        try {
            const value = await AsyncStorage.getItem('session')
            if (value !== null) {
                setEvent('indoor')
                setSession(JSON.parse(value))
                setInterceptor(JSON.parse(value).key)
            } else {
                setEvent('outdoor')
            }
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * Clean session on device
     * @returns
     */
    const cleanOnDevice = async () => {
        console.log('[OUTDOOR] - Clean on device')
        delete instance.defaults.headers.common['Authorization']
        try {
            await AsyncStorage.removeItem('session')
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * Set interceptor on Header of request
     * @param key
     * @returns
     */
    const setInterceptor = (key: string) => {
        console.log('[OUTDOOR] - Set interceptor')
        instance.defaults.headers.common['Authorization'] = `Token ${key}`
        instance.interceptors.response.use((config) => {
            console.log('[OUTDOOR] - Response', config)
            if (config.status === 401 || config.status === 403) {
                console.log('[OUTDOOR] - Token expirado')
                setEvent('outdoor')
            }
            return config
        })
    }

    React.useEffect(() => {
        getOnDevice()
    }, [])

    return <SessionContext.Provider value={{ event, user, setEvent, setSession, saveOnDevice, getOnDevice, setInterceptor, cleanOnDevice }}>{children}</SessionContext.Provider>
}
