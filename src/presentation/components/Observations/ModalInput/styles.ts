import { TextInput } from "react-native";
import styled from "styled-components/native";
import { ColorPrimary } from "../../../../utils/global";

import resp from '../../../../utils/responsivity';

export const Container = styled.SafeAreaView`
  background-color: ${ColorPrimary};
  width: 100%;
  min-height: ${resp(250)}px;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const ContainerInput = styled.View`
  width: 80%;
  height: ${resp(60)}px;
  border: solid 1px #FFFFFF;
  border-radius: ${resp(10)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(TextInput)`
  width: 95%;
  height: ${resp(60)}px;
  color: #FFFFFF;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${resp(40)}px;
`;

export const ButtonSave = styled.TouchableOpacity`
  width: ${resp(150)}px;
  height: ${resp(50)}px;
  background-color: #3E60A4;
  justify-content: center;
  align-items: center;
  border-radius: ${resp(10)}px;
`;

export const ButtonCancel = styled.TouchableOpacity`
  width: ${resp(150)}px;
  height: ${resp(50)}px;
  border: solid 1px #FFFFFF;
  margin-right: ${resp(30)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${resp(10)}px;
`;

export const LabelButtons = styled.Text`
  font-family: "OpenSans-Bold";
  color: #FFFFFF;
`;