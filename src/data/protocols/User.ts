export interface IUser {
  logged: Boolean | null;
  name: String | null;
  password: String | null;
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