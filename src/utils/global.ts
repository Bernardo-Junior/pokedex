import styled from "styled-components/native";

import resp from '../utils/responsivity';

import { TextInput } from "react-native";

export const ColorPrimary = "#ED5564";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${ColorPrimary};
`;

export const ContainerInput = styled.View`
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${resp(7)}px;
  width: 100%;
  height: ${resp(60)}px;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
`;

export const Input = styled(TextInput)`
  width: 95%;
  height: ${resp(55)}px;
`;