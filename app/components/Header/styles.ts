import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 64px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
`

export const ContainerButton = styled.TouchableOpacity`
    flex-direction: row;
`

export const ImageCircle = styled.Image`
    width: 38px;
    height: 38px;
    border-radius: 20px;
    background-color: #e0e0e0;
`

export const TextName = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: ${({ color }) => color};
`

export const TextEmail = styled.Text`
    font-size: 14px;
    color: ${({ color }) => color};
`

export const ContainerText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`
