import { Ionicons } from '@expo/vector-icons'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import React from 'react'
import { FlatList } from 'react-native'
import EmptyTask from '../../components/EmptyTask'
import { ContainerMax, Divider } from '../../components/UiKit'
import { ListService } from '../../service/api/ListService'
import { IList } from '../../types/list.type'

import { ButtonTask, Container, ContainerCreate, ContainerIcon, ContainerList, ContainerTask, ContainerWrapper, TextTask } from './styles'

interface IProps {
    route: RouteProp<any, any>
    navigation: NavigationProp<any, any>
}

const Home: React.FC<IProps> = ({ route, navigation }) => {
    const [list, setList] = React.useState<IList[]>([])

    const getContent = async () => {
        try {
            const result = await ListService.list()
            setList(result.data)
        } catch (e) {
            console.log(e)
        } finally {
            console.log('finally')
        }
    }

    React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            getContent()
        })
        return focusHandler
    }, [navigation])

    const handlerNewList = () => {
        navigation.navigate('ListDetails')
    }

    const handlerList = (item: IList) => {
        navigation.navigate('ListDetails', { item })
    }

    const renderList = () => {
        return (
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <ButtonTask key={item.id} onPress={() => handlerList(item)}>
                        <ContainerIcon>
                            <Ionicons name='list' size={24} color={item.color} />
                        </ContainerIcon>
                        <TextTask>{item.name}</TextTask>
                    </ButtonTask>
                )}
            />
        )
    }

    const renderEmpty = () => {
        return <EmptyTask />
    }

    return (
        <Container>
            <ContainerList>
                <ContainerTask>{list.length > 0 ? renderList() : renderEmpty()}</ContainerTask>
            </ContainerList>
            <Divider />
            <ContainerMax>
                <ContainerCreate onPress={handlerNewList}>
                    <ContainerIcon>
                        <Ionicons name='add' size={24} color='#fff' />
                    </ContainerIcon>
                    <TextTask>Nova lista</TextTask>
                </ContainerCreate>
            </ContainerMax>
        </Container>
    )
}

export default Home
