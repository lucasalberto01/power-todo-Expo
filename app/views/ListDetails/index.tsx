import { NavigationProp, RouteProp, useTheme } from '@react-navigation/native'
import React from 'react'
import Checkbox from 'expo-checkbox'
import { Alert } from 'react-native'
import { ListService } from '../../service/api/ListService'
import { ButtonAdd, ButtonAddText, ButtonTask, CheckBoxBtn, Container, IconContainer } from './styles'
import Modal from './Modal'
import ModalTask from './AddTask'
import { Ionicons } from '@expo/vector-icons'
import { FlatList } from 'react-native'
import { IList } from '../../types/list.type'
import { TaskService } from '../../service/api/TaskService'
import { ITask, ITaskCreate } from '../../types/task.type'

interface IProps {
    navigation: NavigationProp<any, any>
    route: RouteProp<any, any>
}

const NewTask: React.FC<IProps> = ({ navigation, route }) => {
    const colors = useTheme()

    const [headerTitle, setHeaderTitle] = React.useState('Nova Lista')
    const [modalVisible, setModalVisible] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [modalTask, setModalTask] = React.useState(false)
    const [tasks, setTasks] = React.useState<ITask[]>([])

    React.useLayoutEffect(() => {
        if (route.params?.item) {
            setHeaderTitle(route.params.item.name)
            loadTasks()
        } else {
            setModalVisible(true)
        }
    }, [route.params?.item])

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: headerTitle,
        })
    }, [headerTitle, navigation])

    const loadTasks = async () => {
        try {
            const data = await TaskService.list(route.params.item.id)
            setTasks(data.data)
        } catch (e) {
            navigation.goBack()
            Alert.alert('Erro', 'Erro ao carregar lista')
            console.log(e)
        }
    }

    const cancelList = () => {
        setModalVisible(false)
        navigation.goBack()
    }

    const confirmList = async (data: any) => {
        setIsSubmitting(true)
        await ListService.create(data)
        setIsSubmitting(false)
        setModalVisible(false)
        loadTasks()
    }

    const confirmTask = async (data: ITaskCreate) => {
        setIsSubmitting(true)
        await TaskService.create(route.params.item.id, data)
        setIsSubmitting(false)
        setModalTask(false)
        loadTasks()
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
            <Modal cancelTask={cancelList} confirmTask={confirmList} isSubmitting={isSubmitting} modalVisible={modalVisible} onChangeTitle={setHeaderTitle} />
            <ModalTask modalVisible={modalTask} cancelTask={cancelTask} isSubmitting={isSubmitting} confirmTask={confirmTask} />
            <FlatList data={tasks} keyExtractor={(item) => item.id.toString()} ListFooterComponent={() => renderFooter()} renderItem={({ item }) => renderItem(item)} />
        </Container>
    )
}

export default NewTask
