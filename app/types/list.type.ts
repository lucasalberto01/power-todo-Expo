export interface IList {
    id: number
    name: string
    color: string
    user_id: number
}

export type IListCreate = Omit<IList, 'id' | 'user_id' | 'color'>
