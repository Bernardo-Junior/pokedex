import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { Container, styles } from '../../../utils/global';
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

// import { Container } from './styles';

const Home: React.FC = () => {
  const pokemons = [
    {
      name: "1",
      url: "String",
      title: ""
    },
    {
      name: "2",
      url: "String",
      title: ""
    },
    {
      name: "3",
      url: "String",
      title: ""
    },
  ]
  const renderItems: ListRenderItem<any> = ({ item }) => {
    return (
      item.titulo !== "empty" ? (
        <ContainerList style={styles.shadow}>
          <ImageList source={pokeball} />
          <LabelList>
            PIKACHU
          </LabelList>
        </ContainerList>
      ) : (
        <ContainerList
          style={{ backgroundColor: 'transparent' }}
          disabled={true}
        />
      )

    )
  }

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

  return (
    <Container style={{ backgroundColor: "#FFFFFF" }}>
      <Header name="Todos os Pokemons" />

      <FlatList
        ListHeaderComponent={renderHeader}
        data={formatData(pokemons, 3)}
        numColumns={3}
        keyExtractor={pokemon => pokemon.name}
        renderItem={renderItems}
        contentContainerStyle={{ alignItems: 'center', marginTop: resp(10) }}
      />
    </Container>
  )
}

export default Home;