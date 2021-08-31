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

import { FlatList, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Container, styles } from '../../../utils/global';
import ModalInput from './ModalInput';
import { useState } from 'react';
import { ListRenderItem } from 'react-native';
import { useEffect } from 'react';
import ModalOptions from './ModalOptions';
import { useMemo } from 'react';


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
  const [visibleOptions, setVisibleOptions] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [typeOptions, setTypeOption] = useState<string>("");
  const [itemOptions, setItemOptions] = useState<IObject>({} as IObject);
  const [count, setCount] = useState<number>(0);

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

  const renderItems = (item: IObject, type: string) => {

    return (
      <ContainerList
        onPress={() => {
          setCount(count => count + 1),
            setItemOptions(item),
            setTypeOption(type),
            setVisibleOptions(true)
        }}
      >
        <LabelList>
          {item.value}
        </LabelList>
        <ButtonOptions
          onPress={() => {
            setCount(count => count + 1),
              setItemOptions(item),
              setTypeOption(type),
              setVisibleOptions(true)
          }}
        >
          <Configurations width={resp(20)} height={resp(20)} />
        </ButtonOptions>
      </ContainerList>
    )
  }

  //Funções para remover dados da lista
  const removeInput = (type: string, item: IObject) => {
    var result = false;

    switch (type) {
      case "Observações":
        result = removeObservations(item);
        break;
      case "Alimentação":
        result = removeFoods(item);
        break;
      case "Curiosidades":
        result = removeCuriosities(item);
        break;
      default:
        return false;
    }

    return result;
  }

  const removeCuriosities = (item: IObject) => {
    const resultIndex = descriptions.comments.otherCuriosities.findIndex(habitat => habitat.id === item.id);

    if (resultIndex >= 0) {
      descriptions.comments.otherCuriosities.splice(resultIndex, 1);
      setCount(count => count + 1);
      return true;
    } else {
      return false;
    }
  }

  // useEffect(() => {
  //   console.log(descriptions.comments)
  // }, [count]);

  const removeFoods = (item: IObject) => {
    const resultIndex = descriptions.comments.Foods.findIndex(habitat => habitat.id === item.id);

    if (resultIndex >= 0) {
      descriptions.comments.Foods.splice(resultIndex, 1);
      setCount(count => count + 1);
      return true;
    } else {
      return false;
    }
  }

  const removeObservations = (item: IObject) => {
    const resultIndex = descriptions.comments.habitats.findIndex(habitat => habitat.id === item.id);

    if (resultIndex >= 0) {
      descriptions.comments.habitats.splice(resultIndex, 1);
      setCount(count => count + 1);
      return true;
    } else {
      return false;
    }
  }

  //Funções para editar uma informação da lista
  const editInput = (type: string, item: IObject, value: string) => {
    var result = false;

    switch (type) {
      case "Observações":
        result = editObservations(item, value);
        break;
      case "Alimentação":
        result = editFoods(item, value);
        break;
      case "Curiosidades":
        result = editCuriosities(item, value);
        break;
      default:
        return false;
    }

    return result;
  }

  const editCuriosities = (item: IObject, value: string) => {
    const resultIndex = descriptions.comments.otherCuriosities.findIndex(habitat => habitat.id == item.id);

    if (resultIndex >= 0) {
      descriptions.comments.otherCuriosities[resultIndex].value = value;
      setCount(count => count + 1);
      return true;
    } else {
      return false;
    }

  }

  const editFoods = (item: IObject, value: string) => {
    const resultIndex = descriptions.comments.Foods.findIndex(food => food.id == item.id);

    if (resultIndex >= 0) {
      descriptions.comments.Foods[resultIndex].value = value;
      setCount(count => count + 1);
      return true;
    } else {
      return false;
    }
  }

  const editObservations = (item: IObject, value: string) => {
    const resultIndex = descriptions.comments.habitats.findIndex(observation => observation.id == item.id);

    if (resultIndex >= 0) {
      descriptions.comments.habitats[resultIndex].value = value;
      setCount(count => count + 1);
      return true;
    } else {
      return false;
    }
  }

  //Funções para salvar informações na lista
  const saveInput = (type: string) => {
    switch (type) {
      case "Observações":
        return saveObservations();
      case "Alimentação":
        return saveFoods();
      case "Curiosidade":
        return saveCuriosities();
      default:
        return;
    }
  }

  const saveCuriosities = () => {
    descriptions.comments.otherCuriosities.push({
      id: (Math.random() * (9999 - 1) + 1),
      value: curiosities
    });
    setCount(count => count + 1);
    setCuriosities("");
    setVisibleModal(false);
  }

  const saveFoods = () => {
    descriptions.comments.Foods.push({
      id: (Math.random() * (9999 - 1) + 1),
      value: food
    });
    setCount(count => count + 1);
    setFood("");
    setVisibleModal(false);
  }

  const saveObservations = () => {
    descriptions.comments.habitats.push({
      id: (Math.random() * (9999 - 1) + 1),
      value: habitat
    });
    setCount(count => count + 1);
    setHabitat("");
    setVisibleModal(false);
  }

  const save = () => {
    descriptions.comments.place = localization;
    saveComments(descriptions);
  }

  const renderHabitats = useMemo(() => {
    return (
        descriptions.comments.habitats.map(item => {
          return (
            <ContainerMap key={item.id}>
              {renderItems(item, "Observações")}
            </ContainerMap>
          )
        })
    )
  }, [descriptions, count])

  const renderFoods = useMemo(() => {
    return (
        descriptions.comments.Foods.map(item => {
          return (
            <ContainerMap key={item.id}>
              {renderItems(item, "Alimentação")}
            </ContainerMap>
          )
        })
    )
  }, [descriptions, count])

  const renderCuriosities = useMemo(() => { 
    return (
        descriptions.comments.otherCuriosities.map(item => {
          return (
            <ContainerMap key={item.id}>
              {renderItems(item, "Curiosidades")}
            </ContainerMap>
          )
        })
    )
  }, [descriptions, count])

  return (
    <>
    <Container style={{ backgroundColor: "#FFFFFF" }}>
      <Header name="Observações Adicionais" />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={resp(50)}
        style={{ flex: 1 }}
      >
        
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >

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

          {renderHabitats}

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

          {renderFoods}

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

          {renderCuriosities}

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
        <ModalInput
          label={placeholder}
          value={type === "Observações" ? habitat : type === "Alimentação" ? food : curiosities}
          setValue={type === "Observações" ? setHabitat : type === "Alimentação" ? setFood : setCuriosities}
          setVisible={setVisibleModal}
          visible={visibleModal}
          saveInput={saveInput}
        />

        <ModalOptions
          item={itemOptions}
          name=""
          setVisible={setVisibleOptions}
          visible={visibleOptions}
          type={typeOptions}
          editInput={editInput}
          removeInput={removeInput}
          count={count}
        />
        </KeyboardAvoidingView>
      </Container>
    </>
  )
}

export default Observations;