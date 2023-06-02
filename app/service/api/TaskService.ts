import { ITaskCreate } from '../../types/task.type'
import { instance } from '../base'

export const TaskService = {
    create: (listId: number, data: ITaskCreate) => instance.post('api/task/' + listId + '/', data),
    list: (listId: number) => instance.get('api/task/' + listId),
}
