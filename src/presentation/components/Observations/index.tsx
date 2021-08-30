import React, { useContext } from 'react';
import UserContext from '../../../data/contexts/User';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { IDescriptionPokemon, IDescriptionPokemonCaptured, IObject } from '../../../data/protocols/models/IUsePokemons';

//Imagens
import textComments from '../../../assets/images/textComments.png';
import textLocalization from '../../../assets/images/textLocalization.png';
import textFood from '../../../assets/images/textFood.png';
import textCuriosities from '../../../assets/images/textCuriosities.png';

//Icones
import BackArrow from '../../../assets/icons/arrowBack.svg';
import HeartLight from '../../../assets/icons/heartLight.svg';
import HeartRed from '../../../assets/icons/heartRed.svg';
import Plus from '../../../assets/icons/plus.svg';
import Configurations from '../../../assets/icons/configurations.svg';

//Estilização 
import Header from '../Header';
import resp from '../../../utils/responsivity';
import {
  ImagePokemon,
  Btn,
  ContainerArrow,
  ContainerSubHeader,
  LabelBtn,
  ContainerIcons,
  ContainerImagePokemon,
  NamePokemon,
  ImageHabitat,
  ContainerImages,
  BtnPlus,
  ImageLocalization,
  ImageFood,
  ImageCuriosities,
  ButtonSave,
  ButtonSaveLabel,
  ContainerInput,
  Input,
  ContainerList,
  LabelList,
  ButtonOptions,
  LabelOption,
  ContainerMap
} from './styles';

import { FlatList, ScrollView } from 'react-native';
import { Container, styles } from '../../../utils/global';
import ModalInput from './ModalInput';
import { useState } from 'react';
import { ListRenderItem } from 'react-native';
import { useEffect } from 'react';


export type RootStackParamList = {
  Params: {
    descriptions: IDescriptionPokemonCaptured
  };
};


const Observations: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Params'>>();
  const { descriptions } = route.params;
  const { goBack } = useNavigation();
  const { user, favoritePokemon, saveComments } = useContext(UserContext);
  const [habitat, setHabitat] = useState<string>("");
  const [localization, setLocalization] = useState<string>("");
  const [food, setFood] = useState<string>("");
  const [curiosities, setCuriosities] = useState<string>("");
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>("");
  const [type, setType] = useState<string>("");

  useEffect(() => {
    setLocalization(descriptions.comments.place.toString());
  }, [descriptions])


  const validateCaptured = () => {
    const resultFind = user?.favorites.find(pokemon => pokemon.name.includes(descriptions.name));
    if (resultFind) {
      return true
    }
    return false
  }

  const subHeader = () => {
    return (
      <ContainerSubHeader>
        <ContainerArrow>
          <Btn onPress={() => { goBack() }}>
            <BackArrow width={resp(35)} height={resp(35)} />
            <LabelBtn>
              Voltar
            </LabelBtn>
          </Btn>
        </ContainerArrow>

        <ContainerImagePokemon>
          <ImagePokemon source={{ uri: descriptions?.sprites?.other['official-artwork']?.front_default }} />
        </ContainerImagePokemon>

        <ContainerIcons
          onPress={() => { descriptions && favoritePokemon(descriptions) }}
          disabled={validateCaptured()}
        >
          {
            validateCaptured() ? (
              <HeartRed width={resp(35)} height={resp(35)} />
            ) : (
              <HeartLight width={resp(35)} height={resp(35)} />
            )
          }
        </ContainerIcons>
      </ContainerSubHeader>
    )
  }

  const renderItems = (item: IObject) => {
    return (
      <ContainerList>
        <LabelList>
          {item.value}
        </LabelList>
        <ButtonOptions>
          <Configurations width={resp(20)} height={resp(20)} />
        </ButtonOptions>
      </ContainerList>
    )
  }

  const saveInput = (type: string) => {
    if (type === "Observações") {
      return saveObservations();
    } else if (type === "Alimentação") {
      return saveFoods();
    } else if (type === "Curiosidade") {
      return saveCuriosities();
    } else {
      return;
    }
  }

  const saveCuriosities = () => {
    descriptions.comments.otherCuriosities.push({
      id: (Math.random() * (9999 - 1) + 1),
      value: curiosities
    });
    setCuriosities("");
    setVisibleModal(false);
  }

  const saveFoods = () => {
    descriptions.comments.Foods.push({
      id: (Math.random() * (9999 - 1) + 1),
      value: food
    });
    setFood("");
    setVisibleModal(false);
  }

  const saveObservations = () => {
    descriptions.comments.habitats.push({
      id: (Math.random() * (9999 - 1) + 1),
      value: habitat
    });
    setHabitat("");
    setVisibleModal(false);
  }

  const save = () => {
    descriptions.comments.place = localization;
    saveComments(descriptions)
  }

  return (
    <>

      <Header name="Observações Adicionais" />
      <Container style={{ backgroundColor: "#FFFFFF" }}>
        <ModalInput
          label={placeholder}
          value={type === "Observações" ? habitat : type === "Alimentação" ? food : curiosities}
          setValue={type === "Observações" ? setHabitat : type === "Alimentação" ? setFood : setCuriosities}
          setVisible={setVisibleModal}
          visible={visibleModal}
          saveInput={saveInput}
        />
        <ScrollView>

          {subHeader()}

          <NamePokemon>
            {descriptions?.name?.toUpperCase()}
          </NamePokemon>

          <ContainerImages style={{ marginTop: resp(130) }}>
            <ImageHabitat source={textComments} resizeMode="contain" />

            <BtnPlus
              onPress={() => {
                setType("Observações"),
                  setPlaceholder("Digite a observação"),
                  setVisibleModal(true)
              }}
            >
              <Plus width={resp(40)} height={resp(40)} />
            </BtnPlus>
          </ContainerImages>

          {
            descriptions.comments.habitats.map(item => {
              return (
                <ContainerMap key={item.id}>
                  {renderItems(item)}
                </ContainerMap>
              )
            })
          }

          <ImageLocalization source={textLocalization} resizeMode="contain" />

          <ContainerInput>
            <Input
              placeholderTextColor="#888888"
              placeholder={"Digite a localização"}
              value={localization}
              onChangeText={value => setLocalization(value)}
            />
          </ContainerInput>

          <ContainerImages >
            <ImageFood source={textFood} resizeMode="contain" />

            <BtnPlus
              onPress={() => {
                setType("Alimentação"),
                  setPlaceholder("Digite a forma"),
                  setVisibleModal(true)
              }}
            >
              <Plus width={resp(40)} height={resp(40)} />
            </BtnPlus>
          </ContainerImages>

          {
            descriptions.comments.Foods.map(item => {
              return (
                <ContainerMap key={item.id}>
                  {renderItems(item)}
                </ContainerMap>
              )
            })
          }

          <ContainerImages>
            <ImageCuriosities source={textCuriosities} resizeMode="contain" />

            <BtnPlus
              onPress={() => {
                setType("Curiosidade"),
                  setPlaceholder("Digite a curiosidade"),
                  setVisibleModal(true)
              }}
            >
              <Plus width={resp(40)} height={resp(40)} />
            </BtnPlus>
          </ContainerImages>

          {
            descriptions.comments.otherCuriosities.map(item => {
              return (
                <ContainerMap key={item.id}>
                  {renderItems(item)}
                </ContainerMap>
              )
            })
          }

          <ButtonSave
            style={styles.shadow}
            onPress={() => {
              save()
            }}
          >
            <ButtonSaveLabel>
              SALVAR ALTERAÇÕES
            </ButtonSaveLabel>
          </ButtonSave>
        </ScrollView>
      </Container>
    </>
  )
}

export default Observations;