import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { IHeader } from '../../../data/protocols/Header';

//Imagens
import textAll from '../../../assets/images/textAllPokemons.png';
import textCaptured from '../../../assets/images/textCaptured.png';
import textRemarks from '../../../assets/images/textAdditionalRemarks.png';
import textFavorites from '../../../assets/images/textFavorites.png';
import textAvisted from '../../../assets/images/textAvisted.png';

//Icones
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

// Estilização
import resp from '../../../utils/responsivity';
import { styles } from '../../../utils/global';
import { Btn, ContainerHeader, Image } from './styles';

// import { Container } from './styles';

const Header: React.FC<IHeader> = ({ name }) => {
  const { dispatch } = useNavigation();
  return (
    <ContainerHeader>
      <Btn onPress={() => { dispatch(DrawerActions.openDrawer()) }}>
        <Feather
          style={[
            styles.shadow,
            {
              marginBottom: resp(10),
              right: resp(40)
            }
          ]}
          name="list"
          size={resp(35)}
          color="#FFFFFF"
        />
      </Btn>
      {
        name === "Todos os Pokemons" ? (
          <Image source={textAll} resizeMode="stretch" />
        ) : name === "Capturados" ? (
          <Image source={textCaptured} resizeMode="stretch" />
        ) : name === "Avistados" ? (
          <Image source={textAvisted} resizeMode="stretch" />
        ) : (
          <Image source={textFavorites} resizeMode="stretch" />
        )
      }
    </ContainerHeader>
  )
}

export default Header;