import { useNavigation, useTheme } from '@react-navigation/native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormTextInput } from '../../components/UiKit'
import { Button } from '../../components/UiKit/Button'
import { Card, Container, ContainerButton, TextOr, Title } from './styles'
import { AuthService } from '../../service/api/AuthService'
import { SessionContext } from '../../context/SessionContext'

type FormData = {
    username: string
    password1: string
    password2: string
    email: string
}

const schemaRegister = yup
    .object({
        username: yup.string().required(),
        password1: yup.string().required(),
        password2: yup.string().required(),
        email: yup.string().required().email(),
    })
    .required()

const Register: React.FC = () => {
    const navigation = useNavigation<any>()
    const colors = useTheme()
    const { setEvent, setSession, saveOnDevice, setInterceptor } = React.useContext(SessionContext)
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const {
        handleSubmit,
        control,
        formState: { errors },
        setError,
    } = useForm<FormData>({
        resolver: yupResolver(schemaRegister),
        defaultValues: {
            username: '',
            password1: '',
            password2: '',
            email: '',
        },
    })

    const onSubmit = (data: FormData) => {
        if (data.password1 !== data.password2) {
            return setError('password2', {
                type: 'manual',
                message: 'Password not match',
            })
        }

        setIsSubmitting(true)

        AuthService.create(data)
            .then((res) => {
                return AuthService.login({
                    username: data.username,
                    password: data.password1,
                })
            })
            .then(async (res) => {
                await saveOnDevice(res.data)
                setInterceptor(res.data.key)
                setSession(res.data)
                setEvent('indoor')
            })
            .catch((err) => {
                if (err.response.status === 400) {
                    if (err.response.data.username) {
                        setError('username', {
                            type: 'manual',
                            message: err.response.data.username.map((item: string) => item).join('\n'),
                        })
                    }

                    if (err.response.data.password1) {
                        setError('password1', {
                            type: 'manual',
                            message: err.response.data.password1.map((item: string) => item).join('\n'),
                        })
                    }

                    if (err.response.data.password2) {
                        setError('password2', {
                            type: 'manual',
                            message: err.response.data.password2.map((item: string) => item).join('\n'),
                        })
                    }

                    if (err.response.data.email) {
                        setError('email', {
                            type: 'manual',
                            message: err.response.data.email.map((item: string) => item).join('\n'),
                        })
                    }
                }
            })
            .finally(() => {
                setIsSubmitting(false)
            })
    }

    const onLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <Container>
            <Card backgroundColor={colors.colors.card}>
                <Title color={colors.colors.text}>Power Todo</Title>

                <FormTextInput label='Username' control={control} name='username' error={errors?.username?.message} />
                <FormTextInput label='Password' control={control} name='password1' error={errors?.password1?.message} secureTextEntry />
                <FormTextInput label='Confirm Password' control={control} name='password2' error={errors?.password2?.message} secureTextEntry />
                <FormTextInput label='Email' control={control} name='email' error={errors?.email?.message} />
                <ContainerButton>
                    <Button loading={isSubmitting} title='Register' onPress={handleSubmit(onSubmit)} />
                    <TextOr color={colors.colors.text}>OR</TextOr>
                    <Button title='Login' onPress={onLogin} />
                </ContainerButton>
            </Card>
        </Container>
    )
}

export default Register
