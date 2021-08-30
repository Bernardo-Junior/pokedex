import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IDescriptionPokemon, IDescriptionPokemonCaptured } from '../../../data/protocols/models/IUsePokemons';

//Imagens
import textComments from '../../../assets/images/textComments.png';
import textLocalization from '../../../assets/images/textLocaliaztion.png';
import textFood from '../../../assets/images/textFood.png';
import textCuriosities from '../../../assets/images/textCuriosities.png';

//Estilização 
import Header from '../Header';
import { ImagePokemon } from './styles';

// import { Container } from './styles';

export type RootStackParamList = {
  Params: {
    descriptions: IDescriptionPokemonCaptured
  };
};

const Observations: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Params'>>();
  const { descriptions } = route.params;
  return (
    <>
      <Header name="Observações Adicionais" />

      <ImagePokemon source={{uri: descriptions?.sprites?.other['official-artwork']?.front_default}} />


    </>
  )
}

export default Observations;