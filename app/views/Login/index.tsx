import { useTheme } from '@react-navigation/native'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FormTextInput } from '../../components/UiKit'
import { Button } from '../../components/UiKit/Button'
import { Card, Container, Title } from './styles'
import { ServiceAuthLogin } from '../../service/api/AuthService'
import { SessionContext } from '../../context/SessionContext'
import { ISession } from '../../types/auth.type'

interface IFormData {
    username: string
    password: string
}

const schemaLogin = yup
    .object({
        username: yup.string().required(),
        password: yup.string().required(),
    })
    .required()

const Login: React.FC = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        setError,
    } = useForm({
        resolver: yupResolver(schemaLogin),
        defaultValues: {
            username: '',
            password: '',
        },
    })
    const { setEvent, setSession, saveOnDevice, setInterceptor } = React.useContext(SessionContext)
    const colors = useTheme()
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const onSubmit = (data: IFormData) => {
        setIsSubmitting(true)

        ServiceAuthLogin<ISession>(data)
            .then(async (res) => {
                await saveOnDevice(res.data)
                setInterceptor(res.data.key)
                setSession(res.data)
                setEvent('indoor')
            })
            .catch((err) => {
                if (err.response.status === 400) {
                    return setError('username', {
                        type: 'manual',
                        message: 'Username or password is incorrect',
                    })
                }
            })
            .finally(() => {
                return setIsSubmitting(false)
            })
    }

    return (
        <Container>
            <Card backgroundColor={colors.colors.card}>
                <Title color={colors.colors.text}>Power Todo</Title>

                <FormTextInput label='Username' control={control} name='username' error={errors?.username?.message} />
                <FormTextInput label='Password' control={control} name='password' error={errors?.password?.message} secureTextEntry />

                <Button loading={isSubmitting} title='Login' onPress={handleSubmit(onSubmit)} />
            </Card>
        </Container>
    )
}

export default Login
