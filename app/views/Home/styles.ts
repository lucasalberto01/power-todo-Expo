import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
`

export const ContainerList = styled.View`
    width: 100%;
    max-width: 400px;
    height: calc(100% - 51px);
`

export const ContainerWrapper = styled.View`
    width: 100%;
    flex: 1;
    max-width: 400px;
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
`

export const ContainerCreate = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    padding: 10px;
    align-items: center;
    flex-direction: row;
`
