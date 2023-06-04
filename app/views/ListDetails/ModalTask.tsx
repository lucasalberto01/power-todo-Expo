import { useTheme } from '@react-navigation/native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Modal } from 'react-native'
import { FormTextInput } from '../../components/UiKit'
import { Button } from '../../components/UiKit/Button'

import { ButtonContainer, CardModal, ContainerModal, TitleModal } from './styles'
import { ITaskCreate } from '../../types/task.type'

interface IProps {
    modalVisible?: boolean
    cancelTask?: () => void
    confirmTask?: (data: ITaskCreate) => void
    isSubmitting?: boolean
}

type FormData = {
    title: string
}

const ModalTask: React.FC<IProps> = ({ modalVisible = false, cancelTask, confirmTask, isSubmitting = false }) => {
    const colors = useTheme()
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormData>({
        defaultValues: {
            title: '',
        },
    })

    return (
        <Modal animationType='fade' transparent={true} visible={modalVisible}>
            <ContainerModal>
                <CardModal backgroundColor={colors.colors.card}>
                    <TitleModal color={colors.colors.text}>Nova task</TitleModal>
                    <FormTextInput control={control} name='title' label='Tarefa' placeholder='Levar o lixo' error={errors?.title?.message} />
                    <ButtonContainer>
                        <Button title='Cancelar' onPress={cancelTask} />
                        <Button loading={isSubmitting} title='Salvar' onPress={handleSubmit(confirmTask)} />
                    </ButtonContainer>
                </CardModal>
            </ContainerModal>
        </Modal>
    )
}

export default ModalTask
