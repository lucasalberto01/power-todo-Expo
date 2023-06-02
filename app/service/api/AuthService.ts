import { ILogin } from '../../types/auth.type'
import { instance } from '../base'

export async function ServiceAuthLogin<T>(data: ILogin) {
    return instance.post<T>('api/auth/login/', data, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: '',
        },
    })
}

export async function ServiceAuthUser<T>() {
    return instance.get<T>('api/auth/user/')
}

export async function ServiceAuthLogout() {
    return instance.post('api/auth/logout/')
}
