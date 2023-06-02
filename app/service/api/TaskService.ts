import { ITaskCreate } from '../../types/task.type'
import { instance } from '../base'

export async function TaskServiceCreate<T>(data: ITaskCreate) {
    return instance.post<T>('api/task/', data)
}

export async function TaskServiceList<T>() {
    return instance.get<T>('api/task/')
}
