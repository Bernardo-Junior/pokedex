import React from 'react';
import { CommonActions, DrawerActions, useNavigation } from '@react-navigation/native';

//Icones
import Pokeball from '../../../assets/icons/pokeball.png';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


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
  const { navigate, goBack, dispatch } = useNavigation();

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


          <ViewOptions
            onPress={() => {
              dispatch(
                CommonActions.reset({
                  routes: [
                    { name: 'Home' },
                    { name: 'DescriptionAllPokemons' },
                    { name: 'PokemonListing' },
                    { name: 'PokemonDetails' },
                    { name: 'Observations' }
                  ],
                })
              );
            }}
            style={{ marginTop: resp(50) }}
          >
            <BtnOption>
              <FontAwesome5 name="book-open" size={25} color="#FFFFFF" />
              <TxtOption>TODOS OS POKEMONS</TxtOption>
              <ViewIconPress>
                <IconsFeatherPlus name="chevron-right" size={30} />
              </ViewIconPress>
            </BtnOption>
            <Hr />
          </ViewOptions>

          <ViewOptions
            onPress={() => {
              dispatch(
                CommonActions.reset({
                  routes: [
                    {
                      name: 'PokemonListing',
                      params: {
                        titleHeader: "Capturados"
                      }
                    },
                    { name: 'Home' },
                    { name: 'DescriptionAllPokemons' },
                    { name: 'PokemonDetails' },
                    { name: 'Observations' }
                  ],
                })
              );
            }}
          >
            <BtnOption>
              <IconsMaterial name="pokeball" size={30} />
              <TxtOption>CAPTURADOS</TxtOption>
              <ViewIconPress>
                <IconsFeatherPlus name="chevron-right" size={30} />
              </ViewIconPress>
            </BtnOption>
            <Hr />
          </ViewOptions>

          <ViewOptions
            onPress={() => {
              dispatch(
                CommonActions.reset({
                  routes: [
                    {
                      name: 'PokemonListing',
                      params: {
                        titleHeader: "Avistados"
                      }
                    },
                    { name: 'Home' },
                    { name: 'DescriptionAllPokemons' },
                    { name: 'PokemonDetails' },
                    { name: 'Observations' }
                  ],
                })
              );
            }}
          >
            <BtnOption>
              <IconsMaterial name="eye" size={30} />
              <TxtOption>AVISTADOS</TxtOption>
              <ViewIconPress>
                <IconsFeatherPlus name="chevron-right" size={30} />
              </ViewIconPress>
            </BtnOption>
            <Hr />
          </ViewOptions>

          <ViewOptions
            onPress={() => {
              dispatch(
                CommonActions.reset({
                  routes: [
                    {
                      name: 'PokemonListing',
                      params: {
                        titleHeader: "Favoritos"
                      }
                    },
                    { name: 'Home' },
                    { name: 'DescriptionAllPokemons' },
                    { name: 'PokemonDetails' },
                    { name: 'Observations' }
                  ],
                })
              );
            }}
          >
            <BtnOption>
              <IconsMaterial name="star" size={30} />
              <TxtOption>FAVORITOS</TxtOption>
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