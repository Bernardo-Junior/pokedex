export interface IUser {
  logged: Boolean;
  name: String;
  password: String;
  favorites: Array<IDescriptionPokemon>;
  captured: Array<IDescriptionPokemon>;
  sighted: Array<IDescriptionPokemon>;
}

export interface IDescriptionPokemon {
  id: String;
  name: String;
  weigth: String;
  skills: Array<String>;
  types: Array<String>;
}