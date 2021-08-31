import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../../data/contexts/User';

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

import { Container, ContainerInput, Input, styles } from '../../../utils/global';

import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';


const Login: React.FC = () => {
  const [press, setPress] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [buttonPress, setButtonPress] = useState<boolean>(false);
  const { navigate } = useNavigation();
  const { signin } = useContext(UserContext);

  const renderLoading = () => {
    return (
      <ActivityIndicator color={"#FFFFFF"} size="small" />
    )
  }

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
                value={email}
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
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
                value={password}
                onChangeText={value => setPassword(value)}
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

          <BtnConfirm 
            disabled={buttonPress} 
            style={styles.shadow}
            onPress={async () => { 
              setButtonPress(!buttonPress);
              let result = await signin(email, password);
              setButtonPress(result);
            }}
          >
            {
              buttonPress ? (
                renderLoading()
              ) : (
                <LabelBtnConfirm>
                  ENTRAR
                </LabelBtnConfirm>
              )
            }
          </BtnConfirm>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default Login;