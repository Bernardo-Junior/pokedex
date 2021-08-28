import styled from "styled-components/native";
import { ColorPrimary } from "../../../utils/global";

import resp from '../../../utils/responsivity';

export const ContainerHeader = styled.SafeAreaView`
  width: 100%;
  height: ${resp(100)}px;
  background-color: ${ColorPrimary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${resp(220)}px;
  height: ${resp(30)}px;
`;

export const Btn = styled.TouchableOpacity``;