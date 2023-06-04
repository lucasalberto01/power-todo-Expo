import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Container } from '../HeaderHome/styles'
import { ContainerMax } from '../UiKit'
import { ContainerHeader, ContainerIcon, ContainerTitle, ContentGroup, TextTitle } from './styles'

interface IProps {
    onDelete: () => void
    onBack: () => void
    title: string
}

const HeaderList: React.FC<IProps> = ({ onBack, onDelete, title }) => {
    const colors = useTheme().colors
    const insets = useSafeAreaInsets()

    return (
        <Container paddingTop={insets.top} backgroundColor={colors.card}>
            <ContainerMax>
                <ContainerHeader>
                    <ContentGroup>
                        <ContainerIcon onPress={onBack}>
                            <Ionicons name='arrow-back' size={24} color={colors.text} />
                        </ContainerIcon>
                        <ContainerTitle>
                            <TextTitle color={colors.text}>{title}</TextTitle>
                        </ContainerTitle>
                    </ContentGroup>
                    <ContainerIcon onPress={onDelete}>
                        <Ionicons name='trash-bin-outline' size={24} color={colors.text} />
                    </ContainerIcon>
                </ContainerHeader>
            </ContainerMax>
        </Container>
    )
}

export default HeaderList
