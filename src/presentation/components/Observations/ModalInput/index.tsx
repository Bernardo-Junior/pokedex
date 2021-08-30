import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { IModalInput } from '../../../../data/protocols/ModalInput';
import { styles } from '../../../../utils/global';

import {
  Container,
  ContainerButtons,
  ContainerInput,
  Input,
  ButtonCancel,
  ButtonSave,
  LabelButtons
} from './styles';

const ModalInput: React.FC<IModalInput> = ({ label, setValue, value, setVisible, visible=false, saveInput }) => {
  const [type, setType] = useState<string>("none");

  const verifyType = () => {
    if(label === "Digite a observação") {
      return "Observações"
    } else if(label === "Digite a forma") {
      return "Alimentação"
    } else if(label === "Digite a curiosidade") {
      return "Curiosidade"
    } else {
      return "";
    }
  }
  return (
    <>
      {
        visible && (
          <Container>
            <ContainerInput>
              <Input
                placeholderTextColor="#FFFFFF"
                placeholder={`${label ? label : ""}`}
                value={value}
                onChangeText={value => setValue(value)}
              />
            </ContainerInput>

            <ContainerButtons>
              <ButtonCancel 
                onPress={() => { setVisible(false) }}
              >
                <LabelButtons>
                  CANCELAR
                </LabelButtons>
              </ButtonCancel>

              <ButtonSave 
                style={styles.shadow}
                onPress={() => { saveInput(verifyType()) }}
              >
                <LabelButtons >
                  SALVAR
                </LabelButtons>
              </ButtonSave>
            </ContainerButtons>
          </Container>
        )
      }
    </>
  )
}

export default ModalInput;