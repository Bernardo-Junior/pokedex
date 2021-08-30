import React from 'react';
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

const ModalInput: React.FC<IModalInput> = ({ label, setValue, value, setVisible, visible=false }) => {
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
                style={styles.shadow}
                onPress={() => { setVisible(false) }}
              >
                <LabelButtons>
                  CANCELAR
                </LabelButtons>
              </ButtonCancel>

              <ButtonSave style={styles.shadow}>
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