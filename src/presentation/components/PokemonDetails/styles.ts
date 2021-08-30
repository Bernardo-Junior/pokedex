import styled from "styled-components/native";
import { ColorPrimary } from "../../../utils/global";

import resp from '../../../utils/responsivity';

export const ContainerSubHeader = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${resp(80)}px;
  margin-top: ${resp(20)}px;
`;

export const ContainerIcons = styled.TouchableOpacity`
  width: 20%;
  height: ${resp(80)}px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: ${resp(10)}px;
`;

export const LabelIcons = styled.Text<{verify: boolean}>`
  font-family: ${props => props.verify ? "OpenSans-Bold" : "OpenSans-Regular"};
`;

export const Image = styled.Image`
  width: ${resp(35)}px;
  height: ${resp(35)}px;
`;

export const ContainerName = styled.View`
  width: 100%;
  height: ${resp(80)}px;
  align-items: center;
  justify-content: center;
`;

export const LabelName = styled.Text`
  font-family: "OpenSans-ExtraBold";
`;

export const LabelHeight = styled.Text`
  font-family: "OpenSans-ExtraBold";
  text-align: center;
  margin-top: ${resp(15)}px;
`;

export const ContainerImagePokemon = styled.Image`
  width: ${resp(250)}px;
  height: ${resp(250)}px;
  align-self: center;
  margin-top: ${resp(30)}px;
`;

export const ImageLabel = styled.Image`
  width: ${resp(120)}px;
  height: ${resp(30)}px;
  margin-left: ${resp(20)}px;
`;

export const TextList = styled.Text`
  font-family: "OpenSans-SemiBold";
  align-self: flex-start;
  text-align: left;
  width: ${resp(160)}px;
  margin: ${resp(10)}px;
  color: #3E60A4;
  margin-left: ${resp(33)}px;
`;

export const ContainerImageLabel = styled.View`
  width: ${resp(411)}px;
  margin-top: ${resp(15)}px;
`;

export const ImageLabelWeight = styled.Image`
  width: ${resp(94)}px;
  height: ${resp(25)}px;
`;

export const ImageLabelHeight = styled(ImageLabelWeight)`
  width: ${resp(108)}px;
`;

export const ContainerArrow = styled.SafeAreaView`
  width: 85%;
  align-self: center;
  margin-bottom: ${resp(15)}px;
`;

export const Btn = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
`;

export const LabelBtn = styled.Text`
  font-family: "OpenSans-Bold";
`;

export const BtnObservations = styled.TouchableOpacity`
  align-self: center;
  width: 70%;
  height: ${resp(50)}px;
  background-color: ${ColorPrimary};
  border-radius: ${resp(7)}px;
  margin-top: ${resp(10)}px;
  margin-bottom: ${resp(10)}px;
  justify-content: center;
  align-items: center;
`;

export const BtnObservationsLabel = styled.Text`
  font-family: "OpenSans-ExtraBold";
  color: #FFFFFF;
`;
