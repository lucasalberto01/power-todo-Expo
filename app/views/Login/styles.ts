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
