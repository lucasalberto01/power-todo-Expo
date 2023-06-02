import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native'
import React from 'react'
import EmptyTask from '../../components/EmptyTask'
import { ServiceListList } from '../../service/api/ListService'
import { IList } from '../../types/list.type'

import { ButtonTask, Container, ContainerCreate, ContainerIcon, ContainerTask, TextTask } from './styles'

const Home: React.FC = () => {
    const [list, setList] = React.useState<IList[]>([])
    const navigation = useNavigation<any>()

    const getContent = async () => {
        try {
            const result = await ServiceListList()
            setList(result.data)
        } catch (e) {
            console.log(e)
        } finally {
            console.log('finally')
        }
    }

    React.useEffect(() => {
        getContent()
    }, [])

    const handlerNewTask = () => {
        navigation.navigate('NewTask', {})
    }

    const renderList = () => {
        return (
            <>
                {list.map((item) => (
                    <ButtonTask key={item.id}>
                        <ContainerIcon>
                            <Ionicons name='list' size={24} color={item.color} />
                        </ContainerIcon>
                        <TextTask>{item.name}</TextTask>
                    </ButtonTask>
                ))}
            </>
        )
    }

    const renderEmpty = () => {
        return <EmptyTask />
    }

    return (
        <Container>
            <ContainerTask>{list.length > 0 ? renderList() : renderEmpty()}</ContainerTask>
            <ContainerCreate onPress={handlerNewTask}>
                <ContainerIcon>
                    <Ionicons name='add' size={24} color='#fff' />
                </ContainerIcon>
                <TextTask>Adicionar lista</TextTask>
            </ContainerCreate>
        </Container>
    )
}

export default Home
