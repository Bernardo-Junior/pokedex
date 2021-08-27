import React from 'react';
import { Container, ContainerInput, Input, styles } from '../../../utils/global';

//Importação das imagens
import textSingin from '../../../assets/images/textSingin.png';
import textEmail from '../../../assets/images/textEmail.png';
import textPassword from '../../../assets/images/textPassword.png';

//Importação dos ícones
import EyeOpen from '../../../assets/icons/eyeOpen.svg';
import EyeClosed from '../../../assets/icons/eyeClosed.svg';

// Estilização
import resp from '../../../utils/responsivity';

import {
  BtnConfirm,
  Btn,
  ContainerImage,
  ContainerInputs,
  ImageLabels,
  ImageSignin,
  LabelBtnConfirm,
  LabelRegister
} from './styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';


const login: React.FC = () => {
  const [press, setPress] = useState<boolean>(false);
  const { navigate } = useNavigation();

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <ContainerImage>
            <ImageSignin source={textSingin} resizeMode="contain" />
          </ContainerImage>
          <ContainerInputs>
            <ImageLabels source={textEmail} resizeMode="stretch" />
            <ContainerInput style={styles.shadow}>
              <Input
                placeholder="Digite seu email"
                placeholderTextColor={"#3E60A4"}
              />
            </ContainerInput>

            <ImageLabels
              style={{ marginTop: resp(20) }}
              source={textPassword}
              resizeMode="stretch"
            />
            <ContainerInput style={styles.shadow}>
              <Input
                placeholder="Digite a sua senha"
                placeholderTextColor={"#3E60A4"}
                style={{ width: '85%' }}
                secureTextEntry={press}
              />
              {
                press ? (
                  <Btn onPress={() => { setPress(!press) }}>
                    <EyeClosed width={resp(30)} height={resp(30)} />
                  </Btn>
                ) : (
                  <Btn onPress={() => { setPress(!press) }}>
                    <EyeOpen width={resp(30)} height={resp(30)} />
                  </Btn>
                )
              }
            </ContainerInput>
            <Btn
              onPress={() => { navigate('Register') }}
            >
              <LabelRegister>
                Não possui uma conta? clique aqui para se cadastrar
              </LabelRegister>
            </Btn>
          </ContainerInputs>

          <BtnConfirm style={styles.shadow}>
            <LabelBtnConfirm>
              ENTRAR
            </LabelBtnConfirm>
          </BtnConfirm>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default login;