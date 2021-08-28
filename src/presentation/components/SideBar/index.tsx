import React from 'react';
import { useNavigation } from '@react-navigation/native';

//Icones
import Pokeball from '../../../assets/icons/pokeball.png';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();


//Estilização
import {
  Container,
  ViewMain,
  ViewInfoUser,
  TxtName,
  ViewIconPress,
  BtnIconBack,
  ViewOptions,
  ViewOptionBack,
  BtnOption,
  IconsMaterial,
  IconsFeather,
  IconsFeatherPlus,
  TxtOption,
  Hr,
  Image
} from './styles';

import resp from '../../../utils/responsivity';

const SideBar: React.FC<object> = ({ }) => {
  const { navigate, goBack, getState } = useNavigation();

  return (
    <>
      <Container>
        <ViewMain>
          <ViewInfoUser>
            <Image
              source={Pokeball}
            />
            <TxtName>MENU</TxtName>
            <ViewIconPress>
              <BtnIconBack onPress={() => { goBack() }}>
                <Ionicons name="md-close" size={35} color={"#FFFFFF"} />
              </BtnIconBack>
            </ViewIconPress>
          </ViewInfoUser>


          <ViewOptions style={{ marginTop: resp(50) }}>
            <BtnOption>
              <IconsMaterial name="pokeball" size={30} />
              <TxtOption>MINHA POKEDEX</TxtOption>
              <ViewIconPress>
                <IconsFeatherPlus name="chevron-right" size={30} />
              </ViewIconPress>
            </BtnOption>
            <Hr />
          </ViewOptions>

          <ViewOptions>
            <BtnOption>
              <IconsMaterial name="star" size={30} />
              <TxtOption>FAVORITOS</TxtOption>
              <ViewIconPress>
                <IconsFeatherPlus name="chevron-right" size={30} />
              </ViewIconPress>
            </BtnOption>
            <Hr />
          </ViewOptions>

          <ViewOptions>
            <BtnOption>
              <IconsMaterial name="information-outline" size={30} />
              <TxtOption>SOBRE</TxtOption>
              <ViewIconPress>
                <IconsFeatherPlus name="chevron-right" size={30} />
              </ViewIconPress>
            </BtnOption>
            <Hr />
          </ViewOptions>

          <ViewOptionBack>
            <BtnOption>
              <IconsFeather name="log-out" size={30} />
              <TxtOption>SAIR</TxtOption>
            </BtnOption>
          </ViewOptionBack>
        </ViewMain>
      </Container>
    </>
  )
};

export default SideBar;