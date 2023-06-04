import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    flex: 1;
    margin-bottom: 10px;
    padding: 20px;
    align-items: center;
    justify-content: center;
`

export const Card = styled.View`
    width: 100%;
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    max-width: 400px;
`

export const Title = styled.Text`
    color: ${({ color }) => color};
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 20px;
`

export const TextOr = styled.Text`
    color: ${({ color }) => color};
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    margin: 10px 0;
    opacity: 0.5;
`

export const ContainerButton = styled.View`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`
