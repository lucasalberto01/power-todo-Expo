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
