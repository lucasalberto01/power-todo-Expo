export interface ITask {
    id: string
    title: string
    completed: boolean
    by_list: number
}

export type ITaskCreate = Omit<ITask, 'id'>
