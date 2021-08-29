import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Header from '../../../components/Header';

//Estilização
import resp from '../../../../utils/responsivity';
import { ContainerIcons, ContainerSubHeader, LabelIcons, Image, ContainerName, LabelName, ContainerImagePokemon, LabelHeight, ImageLabel, TextList, ContainerImageLabel, ImageLabelWeight, ImageLabelHeight } from './styles';
import { Container, errorFunction } from '../../../../utils/global';

//Icones
import Sighted from '../../../../assets/icons/sighted.png';
import Pokeball from '../../../../assets/icons/pokeball.png';

//Imagens
import textSpecies from '../../../../assets/images/textSpecies.png';
import textSkills from '../../../../assets/images/textSkills.png';
import textWeight from '../../../../assets/images/textWeight.png';
import textHeight from '../../../../assets/images/textHeight.png';

import { FlatList, ListRenderItem } from 'react-native';
import { IAbilities, IDescriptionPokemon, ISpecies } from '../../../../data/protocols/models/IUsePokemons';
import { usePokemons } from '../../../../data/hooks/usePokemons';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';

export type RootStackParamList = {
  Params: {
    url: string;
  };
};

const DescriptionAllPokemons: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Params'>>();
  const { fetchDescriptionPokemons } = usePokemons();
  const [descriptions, setDescriptions] = useState<IDescriptionPokemon>({} as IDescriptionPokemon);
  const [abilities, setAbilities] = useState<IAbilities[]>([]);

  const { url } = route.params;

  useEffect(() => {
    setDescriptions({} as IDescriptionPokemon);
    setAbilities([]);
    loadDescriptions();
  }, [url])

  const loadDescriptions = async () => {
    const [result, resultError] = await fetchDescriptionPokemons(url);

    if (!resultError) {
      setDescriptions(result);
      setAbilities(result.abilities)
    } else {
      errorFunction(
        "Erro de Conexão",
        "Ocorreu um erro ao carregar os detalhes do pokemon",
        () => {
          loadDescriptions()
        },
      )
    }
  }

  const renderItemsAbility: ListRenderItem<IAbilities> = useCallback(({ item }) => {
    console.log(item)
    return (
      <TextList>
        {item.ability.name}sadsds
      </TextList>
    )
  }, [])

  const renderHeader = useMemo(() => {
    return (
      <>
        <ContainerSubHeader>
          <ContainerIcons>
            <Image source={Sighted} resizeMode="contain" />
            <LabelIcons>
              Avistei
            </LabelIcons>
          </ContainerIcons>

          <ContainerName>
            <LabelName>
              {descriptions?.name?.toUpperCase()}
            </LabelName>
          </ContainerName>

          <ContainerIcons>
            <Image source={Pokeball} resizeMode="contain" />
            <LabelIcons>
              Capturar
            </LabelIcons>
          </ContainerIcons>
        </ContainerSubHeader>

        <ContainerImagePokemon
          source={{ uri: descriptions?.sprites?.other?.['official-artwork'].front_default }}
          resizeMode="contain"
        >

        </ContainerImagePokemon>

        <ImageLabel
          style={{ marginTop: resp(10) }}
          source={textSkills}
          resizeMode="contain"
        />
      </>
    )
  }, [descriptions])

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
          {descriptions?.weight} cm
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

export default DescriptionAllPokemons;