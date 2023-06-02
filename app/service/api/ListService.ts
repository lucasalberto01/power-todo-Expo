import { IList, IListCreate } from '../../types/list.type'
import { instance } from '../base'

export async function ServiceListList() {
    return instance.get<IList[]>('api/list')
}

export async function ServiceListCreate(data: IListCreate) {
    return instance.post<IList>('api/list/', data)
}
