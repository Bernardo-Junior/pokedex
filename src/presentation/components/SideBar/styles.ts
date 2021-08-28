import resp from '../../../utils/responsivity';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: 'rgba(50,0,0,0.5)';
`;

export const ViewMain = styled.View`
  flex: 1;
  width: ${resp(340)}px;
  background-color: #ED5564;
  padding: 15px;
`;

export const ViewInfoUser = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TxtName = styled.Text`
  font-size: ${resp(25)}px;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: bold;
  align-self: center;
  margin-left: ${resp(5)}px;
  width: ${resp(200)}px;
  text-align: center;
`;


export const ViewIconPress = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const BtnIconBack = styled.TouchableOpacity``;

export const ViewOptions = styled.TouchableOpacity`
  margin-top: ${resp(30)}px;
`;

export const ViewOptionBack = styled(ViewOptions)`
  flex: 1;
  justify-content: flex-end;
  margin-left: ${resp(10)}px;
`;

export const BtnOption = styled.View`
  width: ${resp(290)}px;
  align-self: center;
  flex-direction: row;
  align-items: center;
`;

export const TxtOption = styled.Text`
  font-size: ${resp(18)}px;
  margin-left: ${resp(20)}px;
  color: #FFFFFF;
  font-weight: bold;
`;

export const IconsMaterial = styled(MaterialCommunityIcons)`
  color: #FFFFFF;
`;

export const IconsFeather = styled(Feather)`
  color: #FFFFFF;
`;

export const IconsFeatherPlus = styled(Feather)`
  color: #FFFFFF;
`;

export const Hr = styled.View`
  width: ${resp(280)}px;
  height: ${resp(2)}px;
  background-color: #FFFFFF;
  align-self: center;
  margin-top: ${resp(10)}px;
  border-radius: ${resp(100)}px;
`;

export const Image = styled.Image`
  width: ${resp(50)}px;
  height: ${resp(50)}px;
`;
