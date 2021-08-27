import React from 'react';
import { Container, ContainerInput, Input, styles } from '../../../utils/global';

//Importação das imagens
import textRegister from '../../../assets/images/textRegister.png';
import textEmail from '../../../assets/images/textEmail.png';
import textPassword from '../../../assets/images/textPassword.png';
import textName from '../../../assets/images/textName.png';

//Importação dos ícones
import EyeOpen from '../../../assets/icons/eyeOpen.svg';
import EyeClosed from '../../../assets/icons/eyeClosed.svg';
import BackArrow from '../../../assets/icons/backArrowLight.svg';

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
  ContainerArrow
} from './styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const Register: React.FC = () => {
  const [press, setPress] = useState<boolean>(false);
  const { goBack } = useNavigation();

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
      <ContainerArrow>
        <Btn onPress={() => { goBack() }}>
          <BackArrow width={resp(50)} height={resp(50)} />
        </Btn>
      </ContainerArrow>
      <ContainerImage>
        <ImageSignin source={textRegister} resizeMode="contain" />
      </ContainerImage>
      <ContainerInputs>
        <ImageLabels source={textName} resizeMode="stretch" />
        <ContainerInput style={styles.shadow}>
          <Input
            placeholder="Digite seu nome"
            placeholderTextColor={"#3E60A4"}
            keyboardType="default"
          />
        </ContainerInput>

        <ImageLabels source={textEmail} resizeMode="stretch" />
        <ContainerInput style={styles.shadow}>
          <Input
            placeholder="Digite seu email"
            placeholderTextColor={"#3E60A4"}
            keyboardType="email-address"
          />
        </ContainerInput>

        <ImageLabels
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

export default Register;