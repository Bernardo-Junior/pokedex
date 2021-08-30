import styled from "styled-components/native";

import resp from '../../../utils/responsivity';

export const ImagePokemon = styled.Image`
  width: ${resp(100)}px;
  height: ${resp(100)}px;
  align-self: center;
  margin-top: ${resp(30)}px;
`;