import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Container, ContainerText } from './styles'

// import { Container } from './styles';

const EmptyTask: React.FC = () => {
    const colors = useTheme().colors
    return (
        <Container>
            <ContainerText color={colors.text}>Você não tem nenhuma lista de tarefas</ContainerText>
        </Container>
    )
}

export default EmptyTask
