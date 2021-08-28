export interface IUser {
  name: String;
  email: String;
  password: String;
  favorites: Array<IDescriptionPokemon> | [];
  captured: Array<IDescriptionPokemon> | [];
  sighted: Array<IDescriptionPokemon> | [];
}

export interface IDescriptionPokemon {
  id: String;
  name: String;
  weigth: String;
  skills: Array<String>;
  types: Array<String>;
}

export interface IUserContext {
  user: IUser | null;
  signin(email: string, password: string): Promise<boolean>;
  validateFields(name: string, email: string, password: string): void;
}