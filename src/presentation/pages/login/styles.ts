import styled from "styled-components/native";

import resp from '../../../utils/responsivity';

export const ContainerImage = styled.View`
  width: 100%;
  height: auto;
  align-items: center;
  margin-top: 30%;
`;

export const ImageSignin = styled.Image`
  width: ${resp(200)}px;
  height: ${resp(100)}px;
`;

export const ContainerInputs = styled.View`
  width: ${resp(300)}px;
  height: auto;
  margin-top: ${resp(100)}px;
  align-self: center;
`;

export const ImageLabels = styled.Image`
  width: ${resp(50)}px;
  height: ${resp(16)}px;
  margin-left: ${resp(5)}px;
  margin-bottom: ${resp(5)}px;
`;

export const Btn = styled.TouchableOpacity``;

export const BtnConfirm = styled.TouchableOpacity`
  width: ${resp(250)}px;
  height: ${resp(60)}px;
  border-radius: ${resp(7)}px;
  background: #3E60A4;
  border: 1px solid #3E60A4;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: ${resp(60)}px;
`;

export const LabelBtnConfirm = styled.Text`
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.0703846px;
  color: #FFFFFF;
  font-family: 'OpenSans-ExtraBold';
`;

export const LabelRegister = styled.Text`
  font-family: "OpenSans-SemiBold";
  margin-top: ${resp(20)}px;
  align-self: center;
  color: #FFFFFF;
`;