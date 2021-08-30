import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { IModalInput } from '../../../../data/protocols/ModalInput';
import { IModalOptions } from '../../../../data/protocols/ModalOptions';
import { styles } from '../../../../utils/global';

//Icones
import Edit from '../../../../assets/icons/edit.svg';
import Trash from '../../../../assets/icons/trash.svg';

import resp from '../../../../utils/responsivity';
import {
  Container,
  ContainerIcons,
  LabelIcons,
  ButtonCancel,
  LabelButtons,
  ContainerInput,
  Input,
  ContainerButtons,
  ButtonSave
} from './styles';

const ModalOptions: React.FC<IModalOptions> = ({ removeInput, editInput, name, item, visible, setVisible, type, count }) => {
  const [value, setValue] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    setValue(item.value);
  }, [count])

  const sendEdit = () => {

    const result = editInput(type, item, value);

    if (result) {
      setIsEdit(false);
      setVisible(false);
    } else {
      Alert.alert("OPS!", "Ocorreu um erro ao editar, por favor, tente novamente");
    }
  }

  const sendRemove = () => {
    const result = removeInput(type, item);

    if (result) {
      setIsEdit(false);
      setVisible(false);
    } else {
      Alert.alert("OPS!", "Ocorreu um erro ao remover, por favor, tente novamente");
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
              style={{ flex: 1 , width: '100%'}}
            >
              <ScrollView
                contentContainerStyle={
                  { 
                    flexGrow: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center'
                  }
                }
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                {
                  isEdit ? (
                    <>
                      <ContainerInput>
                        <Input
                          placeholder="Escreva aqui"
                          placeholderTextColor="#FFFFFF"
                          value={value}
                          onChangeText={value => setValue(value)}
                        />
                      </ContainerInput>

                      <ContainerButtons>
                        <ButtonCancel
                          onPress={() => {
                            setVisible(false);
                            setIsEdit(false);
                          }}
                        >
                          <LabelButtons>
                            CANCELAR
                          </LabelButtons>
                        </ButtonCancel>

                        <ButtonSave
                          style={styles.shadow}
                          onPress={() => {
                            sendEdit();
                          }}
                        >
                          <LabelButtons >
                            SALVAR
                          </LabelButtons>
                        </ButtonSave>
                      </ContainerButtons>
                    </>
                  ) : (
                    <>
                      <ContainerIcons onPress={() => { setIsEdit(true) }}>
                        <Edit width={resp(30)} height={resp(23)} />
                        <LabelIcons>
                          Editar
                        </LabelIcons>
                      </ContainerIcons>
                      <ContainerIcons
                        onPress={() => {
                          sendRemove()
                        }}
                      >
                        <Trash width={resp(30)} height={resp(25)} />
                        <LabelIcons>
                          Excluir
                        </LabelIcons>
                      </ContainerIcons>

                      <ButtonCancel
                        style={{ marginRight: 0 }}
                        onPress={() => {
                          setVisible(false)
                        }}
                      >
                        <LabelButtons>
                          CANCELAR
                        </LabelButtons>
                      </ButtonCancel>
                    </>
                  )
                }
              </ScrollView>
            </KeyboardAvoidingView>
          </Container>
        )
      }
    </>
  )
}

export default ModalOptions;