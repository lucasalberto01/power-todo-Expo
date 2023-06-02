import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`
export const ButtonTask = styled.TouchableOpacity`
    width: 100%;
    padding: 10px;
    flex-direction: row;
    align-items: center;
`

export const TextTask = styled.Text`
    font-weight: normal;
    color: #fff;
`

export const ContainerIcon = styled.View`
    width: 24px;
    height: 24px;
    margin-right: 10px;
`

export const ContainerTask = styled.View`
    width: 100%;
    height: calc(100% - 60px);
    padding: 0 10px;
    align-items: center;
    margin-top: 10px;
`

export const ContainerCreate = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    padding: 10px;
    align-items: center;
    flex-direction: row;
    border-top-width: 1px;
    border-top-color: #ffffff44;
`
