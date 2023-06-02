import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Modal } from 'react-native'
import { useForm } from 'react-hook-form'
import { FormTextInput } from '../../components/UiKit'
import { Button } from '../../components/UiKit/Button'
import { ButtonContainer, CardModal, ContainerModal, TitleModal } from './styles'

interface IProps {
    modalVisible: boolean
    cancelTask: () => void
    confirmTask: (data: any) => void
    isSubmitting: boolean
    onChangeTitle: (title: string) => void
}

const ListDetailsModal: React.FC<IProps> = ({ modalVisible, cancelTask, confirmTask, isSubmitting, onChangeTitle }) => {
    const colors = useTheme()
    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            title: '',
        },
    })

    const title = watch('title')

    React.useEffect(() => {
        if (title) onChangeTitle(title)
    }, [title])

    return (
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
    )
}

export default ListDetailsModal
