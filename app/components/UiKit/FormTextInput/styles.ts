import styled from 'styled-components/native'

export const Container = styled.View`
    margin-bottom: 10px;
`

export const Label = styled.Text`
    color: ${({ color }) => color};
    margin-bottom: 10px;
    font-size: 14px
    font-weight: bold;
`

export const Wrapper = styled.View`
    position: relative;
    justify-content: center;
`

export const Error = styled.Text`
    margin-bottom: 10px;
    font-size: 14px
    font-weight: normal;
    color: red;
    margin-top: 5px;
`

export const Input = styled.TextInput`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    background-color: #fff;
`
