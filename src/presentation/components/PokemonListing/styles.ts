import { TextInput } from "react-native";
import styled from "styled-components/native";

import resp from '../../../utils/responsivity';

export const ContainerInput = styled.View`
  width: 85%;
  height: ${resp(50)}px;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: ${resp(10)}px;
  border-radius: ${resp(7)}px;
  flex-direction: row;
`;

export const Input = styled(TextInput)`
  width: 80%;
  height: ${resp(45)}px;
  margin-right: ${resp(5)}px;
`;

export const Hr = styled.View`
  width: ${resp(2)}px;
  height: ${resp(40)}px;
  background-color: #D5D3D3;
  margin-right: ${resp(5)}px;
`;

export const ContainerList = styled.TouchableOpacity`
  width: ${resp(110)}px;
  min-height: ${resp(120)}px;
  background-color: #FFFFFF;
  margin: ${resp(10)}px;
  margin-top: ${resp(50)}px;
  border-radius: ${resp(10)}px;
  justify-content: center;
  align-items: center;
`;

export const ImageList = styled.Image`
  width: ${resp(80)}px;
  height: ${resp(80)}px;
  margin-top: ${resp(10)}px;
`;

export const LabelList = styled.Text`
  height: auto;
  width: ${resp(100)}px;
  text-align: center;
  color: #3E60A4;
  font-family: "OpenSans-Bold";
`;