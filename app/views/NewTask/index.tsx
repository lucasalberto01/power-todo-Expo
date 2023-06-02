import { useNavigation, useTheme } from '@react-navigation/native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Modal } from 'react-native'
import { FormTextInput } from '../../components/UiKit'
import { Button } from '../../components/UiKit/Button'
import { ServiceListCreate } from '../../service/api/ListService'

import { ButtonContainer, CardModal, Container, ContainerModal, TitleModal } from './styles'

interface IProps {
    navigation: any
}

const NewTask: React.FC<IProps> = ({ navigation }) => {
    const colors = useTheme()

    const [headerTitle, setHeaderTitle] = React.useState('Nova Lista')
    const [modalVisible, setModalVisible] = React.useState(true)
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const { control, handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            title: '',
        },
    })

    const title = watch('title')

    React.useEffect(() => {
        if (title) setHeaderTitle(title)
    }, [title])

    // Rerender after headerTitle change
    React.useEffect(() => {
        navigation.setOptions({
            title: headerTitle,
        })
    }, [headerTitle, navigation])

    const cancelTask = () => {
        setModalVisible(false)
        navigation.goBack()
    }

    const confirmTask = async (data: any) => {
        setIsSubmitting(true)
        await ServiceListCreate({ name: data.title })
        setIsSubmitting(false)
        setModalVisible(false)
    }

    return (
        <Container>
            <Modal animationType='fade' transparent={true} visible={modalVisible}>
                <ContainerModal>
                    <CardModal backgroundColor={colors.colors.card}>
                        <TitleModal color={colors.colors.text}>Nova Lista</TitleModal>
                        <FormTextInput control={control} name='title' label='Titulo' />
                        <ButtonContainer>
                            <Button title='Cancelar' onPress={cancelTask} />
                            <Button loading={isSubmitting} title='Salvar' onPress={handleSubmit(confirmTask)} />
                        </ButtonContainer>
                    </CardModal>
                </ContainerModal>
            </Modal>
        </Container>
    )
}

export default NewTask
