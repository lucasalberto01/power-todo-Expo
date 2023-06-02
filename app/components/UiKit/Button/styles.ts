import styled from "styled-components/native";
import Touchable from "react-native-platform-touchable";

export const ButtonContainer = styled(Touchable)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding-left: 14px;
  padding-right: 14px;
  justify-content: center;
  height: 40px;
  border-radius: 4px;
  margin-bottom: 12px;
`;

export const ButtonText = styled.Text`
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
