import { TextInput } from "react-native";
import styled from "styled-components/native";
import { ColorPrimary } from "../../../utils/global";

import resp from '../../../utils/responsivity';

export const ImagePokemon = styled.Image`
  width: ${resp(100)}px;
  height: ${resp(100)}px;
`;

export const ContainerImagePokemon = styled.View`
  width: ${resp(130)}px;
  height: ${resp(130)}px;
  background-color: #C4C4C4;
  border-radius: ${resp(100)}px;
  align-self: center;
  top: ${resp(50)}px;
  justify-content: center;
  align-items: center;
`;

export const ContainerSubHeader = styled.View`
  width: 100%;
  height: ${resp(100)}px;
  justify-content: space-around;
  flex-direction: row;
`;

export const NamePokemon = styled.Text`
  font-family: "OpenSans-ExtraBold";
  top: ${resp(80)}px;
  align-self: center;
`;

export const ContainerArrow = styled.SafeAreaView`
  width: 20%;
  align-self: center;
`;

export const Btn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LabelBtn = styled.Text`
  font-family: "OpenSans-Bold";
`;

export const ContainerIcons = styled.TouchableOpacity`
  width: 20%;
  align-items: center;
  justify-content: center;
`;

export const ImageHabitat = styled.Image`
  width: ${resp(200)}px;
  height: ${resp(30)}px;
`;

export const ContainerImages = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

export const BtnPlus = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  right: ${resp(20)}px
`;

export const ImageLocalization = styled.Image`
  width: ${resp(180)}px;
  height: ${resp(25)}px;
  margin-left: ${resp(4)}px;
  margin-top: ${resp(10)}px;
`;

export const ImageFood = styled.Image`
  width: ${resp(200)}px;
  height: ${resp(30)}px;
  margin-left: ${resp(4)}px;
`;

export const ImageCuriosities = styled.Image`
  width: ${resp(180)}px;
  height: ${resp(30)}px;
  margin-left: ${resp(4)}px;
`;

export const ButtonSave = styled.TouchableOpacity`
  width: ${resp(200)}px;
  height: ${resp(50)}px;
  background-color: ${ColorPrimary};
  align-self: center;
  margin-top: ${resp(40)}px;
  border-radius: ${resp(7)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${resp(40)}px;
`;

export const ButtonSaveLabel = styled.Text`
  font-family: "OpenSans-Bold";
  color: #FFFFFF;
`;

export const ContainerInput = styled.View`
  width: 84%;
  height: ${resp(50)}px;
  border: solid 1px #000000;
  border-radius: ${resp(10)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: ${resp(10)}px;
  margin-bottom: ${resp(20)}px;
`;

export const Input = styled(TextInput)`
  width: 95%;
  height: ${resp(50)}px;
  color: #000000;
`;

export const ContainerList = styled.TouchableOpacity`
  width: 84%;
  min-height: ${resp(45)}px;
  align-self: center;
  border: solid 1px #000000;
  margin-top: ${resp(10)}px;
  border-radius: ${resp(10)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${resp(10)}px;
`;

export const LabelList = styled.Text`
  font-family: "OpenSans-Regular";
  margin-left: ${resp(10)}px;
  width: ${resp(280)}px;
  margin-top: ${resp(5)}px;
  margin-bottom: ${resp(5)}px;
`;


export const ButtonOptions = styled.TouchableOpacity`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;  
  margin-right: ${resp(10)}px;
`;

export const LabelOption = styled.Text`
  font-family: "OpenSans-Regular"; 
  flex-direction: row;
`;

export const ContainerMap = styled.View``;