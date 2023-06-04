import { IList, IListCreate } from '../../types/list.type'
import { instance } from '../base'

export const ListService = {
    list: () => instance.get<IList[]>('api/list'),
    create: (data: IListCreate) => instance.post<IList>('api/list/', data),
    delete: (id: number) => instance.delete<IList>(`api/list/${id}/`),
}
