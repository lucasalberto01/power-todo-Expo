import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Modal } from 'react-native'
import { Button } from '../../components/UiKit/Button'
import { ButtonContainer, CardModal, ContainerModal, TitleModal } from './styles'

interface IProps {
    modalVisible: boolean
    cancelTask: () => void
    confirmTask: () => void
    isSubmitting: boolean
}

const ModalDelete: React.FC<IProps> = ({ modalVisible, cancelTask, isSubmitting, confirmTask }) => {
    const colors = useTheme()
    return (
        <Modal animationType='fade' transparent={true} visible={modalVisible}>
            <ContainerModal>
                <CardModal backgroundColor={colors.colors.card}>
                    <TitleModal color={colors.colors.text}>Tem certeza que deseja apagar ?</TitleModal>

                    <ButtonContainer>
                        <Button fontWeight='normal' title='Não' onPress={cancelTask} />
                        <Button loading={isSubmitting} title='Sim' onPress={confirmTask} />
                    </ButtonContainer>
                </CardModal>
            </ContainerModal>
        </Modal>
    )
}

export default ModalDelete
