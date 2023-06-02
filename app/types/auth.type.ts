export interface ILogin {
    username: string
    password: string
}

export interface IUser {
    first_name: string
    last_name: string
    pk: number
    username: string
    email: string
}

export interface ISession {
    key: string
}

export interface IRegister {
    username: string
    password1: string
    password2: string
    email: string
}
