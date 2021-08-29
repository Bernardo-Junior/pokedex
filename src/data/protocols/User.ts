import { IDescriptionPokemon } from "./models/IUsePokemons";

export interface IUser {
  name: String;
  email: String;
  password: String;
  favorites: Array<IDescriptionPokemon> | [];
  captured: Array<IDescriptionPokemon> | [];
  sighted: Array<IDescriptionPokemon> | [];
}

export interface IUserContext {
  user: IUser | null;
  signin(email: string, password: string): Promise<boolean>;
  validateFields(name: string, email: string, password: string): void;
  spotPokemon(item: IDescriptionPokemon): void;
  capturePokemon(item: IDescriptionPokemon): void;
}