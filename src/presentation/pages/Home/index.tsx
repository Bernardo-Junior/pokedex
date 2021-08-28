import React from 'react';
import { View } from 'react-native';
import { Container } from '../../../utils/global';
import Header from '../../components/Header';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container style={{backgroundColor: "#FFFFFF"}}>
      <Header name="Todos os Pokemons" />
    </Container>
  )
}

export default Home;