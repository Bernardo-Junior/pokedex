import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Container } from '../../../../utils/global';
import Header from '../../../components/Header';

// import { Container } from './styles';

export type RootStackParamList = {
  Params: {
    url: string;
  };
};

const DescriptionAllPokemons: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Params'>>();

  const { url } = route.params;

  return (
    <Container style={{backgroundColor: "#FFFFFF"}}>
      <Header name="Descrição" />
    </Container>
  )
}

export default DescriptionAllPokemons;