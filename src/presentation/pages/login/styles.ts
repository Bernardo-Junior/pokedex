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
  height: ${resp(30)}px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin-left: ${resp(5)}px;
`;

export const BtnEye = styled.TouchableOpacity``;

export const BtnConfirm = styled.TouchableOpacity`
  width: ${resp(250)}px;
  height: ${resp(60)}px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${resp(7)}px;
  background: #3E60A4;
  border: 1px solid #3E60A4;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: ${resp(80)}px;
`;

export const LabelBtnConfirm = styled.Text`
  font-weight: 800;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.0703846px;
  color: #FFFFFF;
`;