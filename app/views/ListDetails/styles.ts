import ExpoCheckbox from 'expo-checkbox/build/ExpoCheckbox'
import styled from 'styled-components/native'

export const Container = styled.View`
    padding: 10px;
    flex: 1;
    align-items: center;
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
    max-width: 400px;
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

export const ButtonAdd = styled.TouchableOpacity`
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 10px;
    width: 100%;
    border-color: ${({ borderColor }) => borderColor};
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
`

export const IconContainer = styled.View`
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
`

export const ButtonAddText = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: ${({ color }) => color};
    margin-left: 10px;
`
export const ButtonTask = styled.TouchableOpacity`
    width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`

export const CheckBoxBtn = styled(ExpoCheckbox)``

export const ContainerRight = styled.TouchableOpacity`
    padding: 15px;
`
