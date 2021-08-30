import { Dispatch, SetStateAction } from "react";

export interface IModalInput {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  saveInput(type: string): void;
}