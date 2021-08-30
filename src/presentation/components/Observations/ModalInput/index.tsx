import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { IModalInput } from '../../../../data/protocols/ModalInput';
import { styles } from '../../../../utils/global';
import resp from '../../../../utils/responsivity';
import {
  Container,
  ContainerButtons,
  ContainerInput,
  Input,
  ButtonCancel,
  ButtonSave,
  LabelButtons
} from './styles';

const ModalInput: React.FC<IModalInput> = ({ label, setValue, value, setVisible, visible = false, saveInput }) => {

  const verifyType = () => {
    if (label === "Digite a observação") {
      return "Observações"
    } else if (label === "Digite a forma") {
      return "Alimentação"
    } else if (label === "Digite a curiosidade") {
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
                    onPress={() => {
                      setValue("");
                      setVisible(false)
                    }}
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
              </ScrollView>
            </KeyboardAvoidingView>
          </Container>
        )
      }
    </>
  )
}

export default ModalInput;