import { IComments, IDescriptionPokemon, IDescriptionPokemonCaptured } from "./models/IUsePokemons";

export interface IUser {
  name: String;
  email: String;
  password: String;
  favorites: Array<IDescriptionPokemon> | [];
  captured: Array<IDescriptionPokemonCaptured> | [];
  sighted: Array<IDescriptionPokemon> | [];
}

export interface IUserContext {
  user: IUser | null;
  signin(email: string, password: string): Promise<boolean>;
  validateFields(name: string, email: string, password: string): void;
  spotPokemon(item: IDescriptionPokemon): void;
  capturePokemon(item: IDescriptionPokemon): void;
  favoritePokemon(item: IDescriptionPokemon): void;
  saveComments(item: IDescriptionPokemonCaptured): void;
  logOff(): void;
}