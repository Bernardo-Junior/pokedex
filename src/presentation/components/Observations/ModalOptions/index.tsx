import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
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

const ModalOptions: React.FC<IModalOptions> = ({removeInput ,editInput, name, item, visible, setVisible, type }) => {
  const [value, setValue] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    setValue(item.value);
  }, [visible])


  return (
    <>
      {
        visible && (
          <Container>
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
                        setIsEdit(false);
                        setVisible(false);
                        editInput(type, item, value);
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
                      setVisible(false);
                      removeInput(type, item);
                    }}
                  >
                    <Trash width={resp(30)} height={resp(25)} />
                    <LabelIcons>
                      Excluir
                    </LabelIcons>
                  </ContainerIcons>

                  <ButtonCancel 
                    style={{marginRight: 0}}
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
          </Container>
        )
      }
    </>
  )
}

export default ModalOptions;