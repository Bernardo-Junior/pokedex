import React, { useContext } from 'react';
import UserContext from '../../../data/contexts/User';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IDescriptionPokemon, IDescriptionPokemonCaptured } from '../../../data/protocols/models/IUsePokemons';

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
  LabelOption
} from './styles';

import { ScrollView } from 'react-native';
import { styles } from '../../../utils/global';
import ModalInput from './ModalInput';
import { useState } from 'react';


export type RootStackParamList = {
  Params: {
    descriptions: IDescriptionPokemonCaptured
  };
};


const Observations: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Params'>>();
  const { descriptions } = route.params;
  const { user, favoritePokemon } = useContext(UserContext);
  const [habitat, setHabitat] = useState<string>("");
  const [localization, setLocalization] = useState<string>("");
  const [food, setFood] = useState<string>("");
  const [curiosities, setCuriosities] = useState<string>("");
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>("");


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
          <Btn onPress={() => { }}>
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

  return (
    <>
      <ModalInput
        label={placeholder}
        value={habitat}
        setValue={setHabitat}
        setVisible={setVisibleModal}
        visible={visibleModal}
      />
      <Header name="Observações Adicionais" />
      <ScrollView>

        {subHeader()}

        <NamePokemon>
          {descriptions?.name?.toUpperCase()}
        </NamePokemon>

        <ContainerImages style={{marginTop: resp(130)}}>
          <ImageHabitat source={textComments} resizeMode="contain" />

          <BtnPlus
            onPress={() => {
              setPlaceholder("Digite a observação"),
                setVisibleModal(true)
            }}
          >
            <Plus width={resp(40)} height={resp(40)} />
          </BtnPlus>
        </ContainerImages>

        <ContainerList>
          <LabelList>
            ASdasdasdasas
          </LabelList>
          <ButtonOptions>
            <LabelOption>
              ...
            </LabelOption>
          </ButtonOptions>
        </ContainerList>

        <ImageLocalization source={textLocalization} resizeMode="contain" />

        <ContainerInput>
          <Input 
            placeholderTextColor="#000000"
            placeholder={"Digite a localização"}
            value={localization}
            onChangeText={value => setLocalization(value)}
          />
        </ContainerInput>

        <ContainerImages >
          <ImageFood source={textFood} resizeMode="contain" />

          <BtnPlus
            onPress={() => {
              setPlaceholder("Digite a forma"),
                setVisibleModal(true)
            }}
          >
            <Plus width={resp(40)} height={resp(40)} />
          </BtnPlus>
        </ContainerImages>

        <ContainerList>
          <LabelList>
            ASdasdasdasas
          </LabelList>
          <ButtonOptions>
            <LabelOption>
              ...
            </LabelOption>
          </ButtonOptions>
        </ContainerList>

        <ContainerImages>
          <ImageCuriosities source={textCuriosities} resizeMode="contain" />

          <BtnPlus
            onPress={() => {
              setPlaceholder("Digite a curiosidade"),
                setVisibleModal(true)
            }}
          >
            <Plus width={resp(40)} height={resp(40)} />
          </BtnPlus>
        </ContainerImages>

        <ContainerList>
          <LabelList>
            ASdasdasdasas
          </LabelList>
          <ButtonOptions>
            <LabelOption>
              ...
            </LabelOption>
          </ButtonOptions>
        </ContainerList>

        <ButtonSave style={styles.shadow}>
          <ButtonSaveLabel>
            SALVAR ALTERAÇÕES
          </ButtonSaveLabel>
        </ButtonSave>
      </ScrollView>
    </>
  )
}

export default Observations;