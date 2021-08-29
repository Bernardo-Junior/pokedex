import React, { useContext } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem, RefreshControl, View } from 'react-native';
import { ColorPrimary, Container, errorFunction, styles } from '../../../utils/global';
import Header from '../../components/Header';

//Estilização 
import { ContainerInput, ContainerList, ContainerMainInput, Hr, ImageList, Input, LabelList } from './styles';
import resp from '../../../utils/responsivity';

//Icones
import Feather from 'react-native-vector-icons/Feather';
import { formatData } from '../../../utils/formatGrid';
Feather.loadFont();

//Imagens
import pokeball from '../../../assets/icons/pokeball.png';
import { usePokemons } from '../../../data/hooks/usePokemons';
import { useEffect } from 'react';
import { useState } from 'react';
import { IDescriptionPokemon, IListPokemons, IResult } from '../../../data/protocols/models/IUsePokemons';
import { useCallback } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import UserContext from '../../../data/contexts/User';

// import { Container } from './styles';

export type RootStackParamList = {
  Params: {
    titleHeader: String;
  };
};

const PokemonListing: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Params'>>();
  const { titleHeader } = route.params;
  const { user } = useContext(UserContext);
  const [namePokemon, setNamePokemon] = useState<string>("");
  const [pokemons, setPokemons] = useState<IDescriptionPokemon[] | []>([]);
  const [pokemonsCopy, setPokemonsCopy] = useState<IDescriptionPokemon[] | []>([]);
  const [nextUrl, setNextUrl] = useState<string>("/pokemon?offset=0&;amp;limit=20");
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { navigate } = useNavigation();

  useEffect(() => {
    verifyScreen();
  }, [])

  const verifyScreen = () => {
    if (titleHeader === "Capturados") {
      if (user?.captured !== undefined) {
        setPokemons(user?.captured);
        setPokemonsCopy(user?.captured);
      }
    } else if (titleHeader === "Favoritos") {
      if (user?.favorites !== undefined) {
        setPokemons(user?.favorites);
        setPokemonsCopy(user?.favorites);
      }
    } else {
      if (user?.sighted !== undefined) {
        setPokemons(user?.sighted);
        setPokemonsCopy(user?.sighted);
      }
    }
  }



  const renderItems: ListRenderItem<IDescriptionPokemon> = useCallback(({ item }) => {
    return (
      <ContainerList
        style={styles.shadow}
        onPress={() => { navigate('PokemonDetails', { item, title: titleHeader }) }}
      >
        <ImageList source={{ uri: item.sprites.other['official-artwork'].front_default }} />
        <LabelList>
          {item.name}
        </LabelList>
      </ContainerList>
    )
  }, [])

  const renderHeader = () => {
    return (
      <ContainerMainInput>
        <ContainerInput
          style={styles.shadow}
        >
          <Input
            placeholder="Pesquise por nome"
            onChangeText={value => { setNamePokemon(value), searchPokemon(value) }}
            value={namePokemon}
            autoCapitalize={"none"}
            autoCorrect={false}
          />
          <Hr />
          <Feather style={{ marginRight: resp(10) }} name="search" size={resp(30)} color={"#D5D3D3"} />
        </ContainerInput>
      </ContainerMainInput>
    )
  }

  const searchPokemon = (name: string) => {
    const result = pokemonsCopy.filter(pokemon => pokemon.name.includes(name));

    if (result) {
      setPokemons(result);
    }
  }

  return (
    <Container style={{ backgroundColor: "#FFFFFF" }}>
      <Header name={`${titleHeader}`} />

      {renderHeader()}

      <FlatList
        removeClippedSubviews
        maxToRenderPerBatch={5}
        initialNumToRender={20}
        data={pokemons}
        numColumns={3}
        keyExtractor={pokemon => pokemon.name}
        renderItem={renderItems}
        contentContainerStyle={{ alignItems: 'center', marginTop: resp(10) }}
      />

    </Container>
  )
}

export default PokemonListing;