import styled from "styled-components/native";

import resp from '../utils/responsivity';

import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

export const ColorPrimary = "#ED5564";

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 2,
    elevation: 10,
  },
})

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${ColorPrimary};
`;

export const ContainerInput = styled.View`
  background-color: #FFFFFF;
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