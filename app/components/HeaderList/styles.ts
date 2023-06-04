import styled from 'styled-components/native'

export const ContainerHeader = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
export const ContainerIcon = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`

export const ContainerTitle = styled.View`
    height: 100%;
    justify-content: center;
    margin-left: 16px;
`

export const TextTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.color};
`

export const ContentGroup = styled.View`
    flex-direction: row;
    align-items: center;
`
