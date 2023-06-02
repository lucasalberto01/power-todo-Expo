import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Control, Controller, Path } from 'react-hook-form'
import { TextInput } from 'react-native'
import { Container, Error, Input, Label, Wrapper } from './styles'

export interface IRCTextInputProps<T> extends React.ComponentProps<typeof TextInput> {
    label?: string
    error?: string
    control: Control<T>
    name: Path<T>
}

const FormTextInput = <T,>({ label, error, control, name, ...props }: IRCTextInputProps<T>) => {
    const colors = useTheme()
    return (
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <Container>
                    {label && <Label color={colors.colors.text}>{label}</Label>}
                    <Wrapper>
                        <Input onBlur={onBlur} onChangeText={onChange} value={value} {...props} />
                    </Wrapper>
                    {error && <Error>{error}</Error>}
                </Container>
            )}
            name={name}
        />
    )
}

export { FormTextInput }
