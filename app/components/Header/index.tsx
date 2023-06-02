import { useNavigation, useTheme } from '@react-navigation/native'
import React from 'react'
import { AuthService } from '../../service/api/AuthService'
import { IUser } from '../../types/auth.type'
import { Container, ContainerButton, ContainerText, ImageCircle, TextEmail, TextName } from './styles'

const Header: React.FC = () => {
    const navigation = useNavigation<any>()
    const colors = useTheme().colors
    const [user, setUser] = React.useState<IUser>({} as IUser)

    const handlerLoad = async () => {
        try {
            const response = await AuthService.user()
            setUser(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const handlerProfile = () => {
        navigation.navigate('Profile', {})
    }

    React.useEffect(() => {
        handlerLoad()
    }, [])

    return (
        <Container backgroundColor={colors.primary}>
            <ContainerButton onPress={handlerProfile}>
                <ImageCircle width={30} source={require('../../assets/checklist.png')} />
                <ContainerText>
                    <TextName color={colors.text}>{'TESTE'}</TextName>
                    <TextEmail color={colors.text + '99'}>{user.email}</TextEmail>
                </ContainerText>
            </ContainerButton>
        </Container>
    )
}

export default Header
