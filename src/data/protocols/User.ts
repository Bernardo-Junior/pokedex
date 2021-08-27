export interface IUser {
  logged: Boolean;
  name: String;
  email: String;
  password: String;
  favorites: Array<IDescriptionPokemon> | null;
  captured: Array<IDescriptionPokemon> | null;
  sighted: Array<IDescriptionPokemon> | null;
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
}