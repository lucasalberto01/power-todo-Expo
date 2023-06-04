import { NavigationProp, RouteProp, useTheme } from '@react-navigation/native'
import React from 'react'
import { Alert, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { IList } from '../../types/list.type'
import { TaskService } from '../../service/api/TaskService'
import { ITask, ITaskCreate } from '../../types/task.type'
import { ListService } from '../../service/api/ListService'
import ModalList, { FormData } from './ModalList'
import ModalTask from './ModalTask'

import { ButtonAdd, ButtonAddText, ButtonTask, CheckBoxBtn, Container, ContainerRight, IconContainer } from './styles'
import ModalDelete from './ModalDelete'
import { ContainerMax } from '../../components/UiKit'
import HeaderList from '../../components/HeaderList'

interface IProps {
    navigation: NavigationProp<any, any>
    route: RouteProp<any, any>
}

interface IRightProps {
    onPress: () => void
}

const HeaderRight: React.FC<IRightProps> = ({ onPress }) => {
    const colors = useTheme()
    return (
        <ContainerRight onPress={onPress}>
            <Ionicons name='trash-bin-outline' size={20} color={colors.colors.text} />
        </ContainerRight>
    )
}

const NewTask: React.FC<IProps> = ({ navigation, route }) => {
    const colors = useTheme()

    const [headerTitle, setHeaderTitle] = React.useState('Nova Lista')
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [modalList, setModalList] = React.useState(false)
    const [modalTask, setModalTask] = React.useState(false)
    const [modalDelete, setModalDelete] = React.useState(false)
    const [tasks, setTasks] = React.useState<ITask[]>([])

    React.useLayoutEffect(() => {
        if (route.params?.item) {
            setHeaderTitle(route.params.item.name)
            loadTasks()
        } else {
            setModalList(true)
        }
    }, [route.params?.item])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: headerTitle,
            header: ({ options }) => <HeaderList title={options.title} onDelete={() => setModalDelete(true)} onBack={() => navigation.goBack()} />,
        })
    }, [headerTitle, navigation])

    const loadTasks = React.useCallback(
        async (item?: IList) => {
            try {
                const itemList = item || route.params?.item
                const data = await TaskService.list(itemList.id)
                setTasks(data.data)
                navigation.setParams({ item: itemList })
            } catch (e) {
                navigation.goBack()
                Alert.alert('Erro', 'Erro ao carregar lista')
                console.log(e)
            }
        },
        [route.params?.item]
    )

    const cancelList = () => {
        setModalList(false)
        navigation.goBack()
    }

    const confirmList = async (data: FormData) => {
        setIsSubmitting(true)
        const response = await ListService.create(data)
        setIsSubmitting(false)
        setModalList(false)
        loadTasks(response.data)
    }

    const confirmTask = async (data: ITaskCreate) => {
        setIsSubmitting(true)
        await TaskService.create(route.params.item.id, data)
        setIsSubmitting(false)
        setModalTask(false)
        loadTasks()
    }
    const confirmDelete = async () => {
        setIsSubmitting(true)
        await ListService.delete(route.params.item.id)
        setIsSubmitting(false)
        setModalDelete(false)
        navigation.goBack()
    }

    const addTask = () => {
        setModalTask(true)
    }

    const cancelTask = () => {
        setModalTask(false)
    }

    const onChangeTask = (task: ITask) => {
        setTasks((prev) => prev.map((item) => (item.id === task.id ? { ...item, completed: !item.completed } : item)))
    }

    const renderFooter = () => (
        <ButtonAdd onPress={addTask}>
            <IconContainer>
                <Ionicons name='add' size={24} color={colors.colors.text} />
            </IconContainer>
            <ButtonAddText color={colors.colors.text}>Adicionar</ButtonAddText>
        </ButtonAdd>
    )

    const renderItem = (item: ITask) => (
        <ButtonTask onPress={() => onChangeTask(item)}>
            <IconContainer>
                <CheckBoxBtn value={item.completed} color={item.completed ? colors.colors.primary : undefined} />
            </IconContainer>
            <ButtonAddText color={colors.colors.text}>{item.title}</ButtonAddText>
        </ButtonTask>
    )

    return (
        <Container>
            <ContainerMax>
                <ModalList cancelTask={cancelList} confirmTask={confirmList} isSubmitting={isSubmitting} modalVisible={modalList} onChangeTitle={setHeaderTitle} />
                <ModalTask modalVisible={modalTask} cancelTask={cancelTask} isSubmitting={isSubmitting} confirmTask={confirmTask} />
                <ModalDelete modalVisible={modalDelete} cancelTask={() => setModalDelete(false)} isSubmitting={isSubmitting} confirmTask={confirmDelete} />
                <FlatList data={tasks} keyExtractor={(item) => item.id.toString()} ListFooterComponent={() => renderFooter()} renderItem={({ item }) => renderItem(item)} />
            </ContainerMax>
        </Container>
    )
}

export default NewTask
