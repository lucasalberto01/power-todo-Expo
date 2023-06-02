import { ILogin, IRegister, ISession, IUser } from '../../types/auth.type'
import { instance } from '../base'

export const AuthService = {
    login: (data: ILogin) => instance.post<ISession>('api/auth/login/', data, {}),
    user: () => instance.get<IUser>('api/auth/user/'),
    logout: () => instance.post('api/auth/logout/'),
    create: (data: IRegister) => instance.post('api/auth/registration/', data, {}),
}
