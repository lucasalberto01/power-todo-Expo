import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 64px;
    align-items: center;
    border-top-width: 1px;
`

export const ContainerText = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: ${({ color }) => color};
    opacity: 0.5;
`
