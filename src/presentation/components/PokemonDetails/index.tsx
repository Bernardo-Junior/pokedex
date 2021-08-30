import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useContext } from 'react';
import Header from '../../components/Header';

//Estilização
import resp from '../../../utils/responsivity';
import {
  ContainerIcons,
  ContainerSubHeader,
  LabelIcons,
  Image,
  ContainerName,
  LabelName,
  ContainerImagePokemon,
  LabelHeight,
  ImageLabel,
  TextList,
  ContainerImageLabel,
  ImageLabelWeight,
  ImageLabelHeight,
  Btn,
  ContainerArrow,
  LabelBtn,
  BtnObservations,
  BtnObservationsLabel
} from './styles';
import { Container, errorFunction, styles } from '../../../utils/global';

//Icones
import HeartLight from '../../../assets/icons/heartLight.svg';
import HeartRed from '../../../assets/icons/heartRed.svg';
import Pokeball from '../../../assets/icons/pokeball.png';
import BackArrow from '../../../assets/icons/arrowBack.svg';

//Imagens
import textSpecies from '../../../assets/images/textSpecies.png';
import textSkills from '../../../assets/images/textSkills.png';
import textWeight from '../../../assets/images/textWeight.png';
import textHeight from '../../../assets/images/textHeight.png';

import { FlatList, ListRenderItem } from 'react-native';
import { IAbilities, IDescriptionPokemon, ISpecies } from '../../../data/protocols/models/IUsePokemons';
import { usePokemons } from '../../../data/hooks/usePokemons';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import UserContext from '../../../data/contexts/User';

export type RootStackParamList = {
  Params: {
    item: IDescriptionPokemon,
    title: string;
  };
};

const PokemonDetails: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Params'>>();
  const { goBack, navigate } = useNavigation();
  const [descriptions, setDescriptions] = useState<IDescriptionPokemon>({} as IDescriptionPokemon);
  const [abilities, setAbilities] = useState<IAbilities[]>([]);
  const { user, favoritePokemon } = useContext(UserContext);

  const { item, title } = route.params;

  useEffect(() => {
    loadDetails();
  }, [item])

  const loadDetails = async () => {
    setDescriptions(item);
    setAbilities(item.abilities);
  }

  const renderItemsAbility: ListRenderItem<IAbilities> = useCallback(({ item }) => {
    return (
      <TextList>
        {item.ability.name}
      </TextList>
    )
  }, [])

  const validateSighted = () => {
    const resultFind = user?.sighted.find(pokemon => pokemon.name.includes(descriptions.name));
    if (resultFind) {
      return true
    }
    return false
  }

  const validateCaptured = () => {
    const resultFind = user?.favorites.find(pokemon => pokemon.name.includes(descriptions.name));
    if (resultFind) {
      return true
    }
    return false
  }

  const renderHeader = useMemo(() => {
    return (
      <>
        <ContainerArrow>
          <Btn onPress={() => { goBack() }}>
            <BackArrow width={resp(35)} height={resp(35)} />
            <LabelBtn>
              Voltar
            </LabelBtn>
          </Btn>
        </ContainerArrow>
        <ContainerSubHeader>
          <ContainerName>
            <LabelName>
              {descriptions?.name?.toUpperCase()}
            </LabelName>
          </ContainerName>

          {
            title === "Capturados" && (
              <ContainerIcons
                onPress={() => { descriptions && favoritePokemon(descriptions) }}
              >
                {
                  validateCaptured() ? (
                    <HeartRed width={resp(35)} height={resp(35)} />
                  ) : (
                    <HeartLight width={resp(35)} height={resp(35)} />
                  )
                }
              </ContainerIcons>
            )
          }
        </ContainerSubHeader>

        <ContainerImagePokemon
          source={{ uri: descriptions?.sprites?.other?.['official-artwork'].front_default }}
          resizeMode="contain"
        />

        {
          title === "Capturados" && (
            <BtnObservations
              onPress={() => { navigate('Observations', { descriptions }) }}
              style={styles.shadow}
            >
              <BtnObservationsLabel>
                OBSERVAÇÕES
              </BtnObservationsLabel>
            </BtnObservations>
          )
        }

        <ImageLabel
          style={{ marginTop: resp(10) }}
          source={textSkills}
          resizeMode="contain"
        />
      </>
    )
  }, [descriptions, user?.favorites])

  const renderFooter = () => {
    return (
      <ContainerImageLabel>
        <ImageLabel
          style={{ marginLeft: resp(4) }}
          source={textSpecies}
          resizeMode="contain"
        />
        <TextList style={{ marginLeft: resp(35) }}>
          {descriptions?.species?.name}
        </TextList>

        <ImageLabelWeight
          source={textWeight}
          resizeMode="contain"
        />
        <TextList style={{ marginLeft: resp(35) }}>
          {descriptions?.weight} kg
        </TextList>

        <ImageLabelHeight
          source={textHeight}
          resizeMode="contain"
        />
        <TextList style={{ marginLeft: resp(35) }}>
          {descriptions?.weight} cm
        </TextList>
      </ContainerImageLabel>
    )
  }

  return (
    <Container style={{ backgroundColor: "#FFFFFF" }}>
      <Header name="Descrição" />

      <FlatList
        ListHeaderComponent={renderHeader}
        removeClippedSubviews
        maxToRenderPerBatch={5}
        initialNumToRender={abilities?.length}
        data={abilities}
        keyExtractor={ability => ability?.ability.name}
        renderItem={renderItemsAbility}
        contentContainerStyle={{ marginTop: resp(10) }}
        ListFooterComponent={renderFooter}
      />
    </Container>
  )
}

export default PokemonDetails;