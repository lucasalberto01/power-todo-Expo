import React from 'react'
import { ActivityIndicator } from 'react-native'
import Touchable, { PlatformTouchableProps } from 'react-native-platform-touchable'
import { Button as ButtonRN } from 'react-native'
import { ButtonContainer, ButtonText } from './styles'
import { useTheme } from '@react-navigation/native'

interface IButtonProps extends PlatformTouchableProps {
    loading?: boolean
    onPress: () => void
    title: string
    fontWeight?: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
}

const Button: React.FC<IButtonProps> = ({ onPress, title, disabled = false, loading = false, fontWeight = 'bold', ...props }) => {
    const { colors } = useTheme()
    return (
        <ButtonContainer fontWeight={fontWeight} backgroundColor={colors.card} onPress={onPress} disabled={disabled || loading} {...props}>
            {loading ? <ActivityIndicator color={colors.text} /> : <ButtonText color={colors.text}>{title}</ButtonText>}
        </ButtonContainer>
    )
}

export { Button }
