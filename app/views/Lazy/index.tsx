import { useTheme } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container } from './styles'

const Lazy: React.FC = () => {
    const colors = useTheme()
    return (
        <Container>
            <ActivityIndicator size='large' color={colors.colors.primary} />
        </Container>
    )
}

export default Lazy
