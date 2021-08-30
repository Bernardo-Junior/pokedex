import { Dispatch, SetStateAction } from "react";
import { IObject } from "./models/IUsePokemons";

export interface IModalOptions {
  name: string;
  item: IObject;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  type: string;
  editInput(type: string, item: IObject, value: string): boolean;
  removeInput(type: string, item: IObject): boolean;
}