import React from 'react';
import { ActivityIndicator, FlatList, ListRenderItem, RefreshControl, View } from 'react-native';
import { ColorPrimary, Container, errorFunction, styles } from '../../../utils/global';
import Header from '../../components/Header';

//Estilização 
import { ContainerInput, ContainerList, Hr, ImageList, Input, LabelList } from './styles';
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
import { IListPokemons, IResult } from '../../../data/protocols/models/IUsePokemons';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Home: React.FC = () => {
  const { fetchPokemons, fetchDescriptionPokemons } = usePokemons();
  const [pokemons, setPokemons] = useState<IResult[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("/pokemon?offset=0&;amp;limit=20");
  const [loading, setLoading] = useState<Boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { navigate } = useNavigation();

  useEffect(() => {
    fetchPokemonsList();
  }, [])

  const fetchPokemonsList = async () => {
    if(loading) {
      return;
    }
      

    setLoading(true);
    const [result, resultError] = await fetchPokemons(nextUrl);

    if (!resultError) {
      if (!refreshing) {
        setPokemons([...pokemons, ...result.results]);
      } else {
        setPokemons(result.results);
      }
      setNextUrl(result.next);
    } else {
      errorFunction(
        "Erro de Conexão",
        "Ocorreu um erro ao carregar os pokemons",
        () => {
          fetchPokemonsList()
        },
      )
    }
    setRefreshing(false);
    setLoading(false);
  }


  const renderItems: ListRenderItem<IResult> = useCallback(({ item }) => {
    return (
      <ContainerList 
        style={styles.shadow}
        onPress={() => { navigate("DescriptionAllPokemons", { url: item.url }) }}
      >
        <ImageList source={pokeball} />
        <LabelList>
          {item.name}
        </LabelList>
      </ContainerList>
    )
  }, [])

  const renderHeader = () => {
    return (
      <ContainerInput
        style={styles.shadow}
      >
        <Input
          placeholder="Pesquise por nome"
        />
        <Hr />
        <Feather name="search" size={resp(30)} color={"#D5D3D3"} />
      </ContainerInput>
    )
  }

  const renderLoading = () => {
    return (
      <View style={{width: '100%', height: resp(50)}}>
        <ActivityIndicator color="#000000" size="small" />
      </View>
    )
  }

  function _onRefresh() {
    setRefreshing(true);
    setNextUrl("/pokemon?offset=0&;amp;limit=20")
    fetchPokemonsList();
  }

  return (
    <Container style={{ backgroundColor: "#FFFFFF" }}>
      <Header name="Todos os Pokemons" />

      <FlatList
        // ListHeaderComponent={renderHeader}
        refreshControl={
          <RefreshControl
            collapsable={true}
            refreshing={refreshing}
            onRefresh={_onRefresh.bind(this)}
            tintColor={ColorPrimary}
          />
        }
        removeClippedSubviews
        maxToRenderPerBatch={5}
        initialNumToRender={20}
        refreshing={refreshing}
        data={pokemons}
        numColumns={3}
        keyExtractor={pokemon => pokemon.name}
        renderItem={renderItems}
        onEndReachedThreshold={nextUrl === null ? null : 1}
        onEndReached={(info: { distanceFromEnd: number }) => { nextUrl === null ? null : fetchPokemonsList() }}
        contentContainerStyle={{ alignItems: 'center', marginTop: resp(10) }}
        ListFooterComponent={loading && renderLoading}
      />

    </Container>
  )
}

export default Home;