import React from 'react';
import { Container, ContainerInput, Input } from '../../../utils/global';

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
  BtnEye,
  ContainerImage,
  ContainerInputs,
  ImageLabels,
  ImageSignin,
  LabelBtnConfirm
} from './styles';
import { useState } from 'react';

const login: React.FC = () => {
  const [press, setPress] = useState<boolean>(false);

  return (
    <Container>
      <ContainerImage>
        <ImageSignin source={textSingin} resizeMode="contain" />
      </ContainerImage>
      <ContainerInputs>
        <ImageLabels source={textEmail} resizeMode="contain" />
        <ContainerInput >
          <Input
            placeholder="Digite seu email"
            placeholderTextColor={"#3E60A4"}
          />
        </ContainerInput>

        <ImageLabels style={{ marginTop: resp(20) }} source={textPassword} resizeMode="contain" />
        <ContainerInput>
          <Input
            placeholder="Digite a sua senha"
            placeholderTextColor={"#3E60A4"}
            style={{ width: '85%' }}
            secureTextEntry={press}
          />
          {
            press ? (
              <BtnEye onPress={() => { setPress(!press) }}>
                <EyeClosed width={resp(30)} height={resp(30)} />
              </BtnEye>
            ) : (
              <BtnEye onPress={() => { setPress(!press) }}>
                <EyeOpen width={resp(30)} height={resp(30)} />
              </BtnEye>
            )
          }
        </ContainerInput>
      </ContainerInputs>

      <BtnConfirm>
        <LabelBtnConfirm>
          ENTRAR
        </LabelBtnConfirm>
      </BtnConfirm>

    </Container>
  )
}

export default login;