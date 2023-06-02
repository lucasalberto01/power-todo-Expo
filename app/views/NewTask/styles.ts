import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`

export const ContainerModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`

export const CardModal = styled.View`
    width: 90%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 15px;
`
export const TitleModal = styled.Text`
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 20px;
    color: ${({ color }) => color};
`

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`
