import styled from "styled-components/native";

import resp from '../../../../utils/responsivity';

export const ContainerSubHeader = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: ${resp(80)}px;
  margin-top: ${resp(20)}px;
`;

export const ContainerIcons = styled.TouchableOpacity`
  width: 20%;
  height: ${resp(80)}px;
  align-items: center;
  justify-content: center;
`;

export const LabelIcons = styled.Text`
  font-family: "OpenSans-Regular";
`;

export const Image = styled.Image`
  width: ${resp(35)}px;
  height: ${resp(35)}px;
`;

export const ContainerName = styled.View`
  width: 40%;
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
