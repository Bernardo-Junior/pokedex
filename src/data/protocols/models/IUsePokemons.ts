export interface IUsePokemons {
  fetchPokemons(url: string) : Promise<[IListPokemons, Boolean]>
  fetchDescriptionPokemons(url: string): Promise<[IDescriptionPokemon, Boolean]>
}

export interface IResult {
  name: string;
  url: string;
  titulo: string;
}

export interface IListPokemons {
  count: number;
  next: string;
  previous: string;
  results: IResult[];
}


export interface IAbility {
  name: string;
  url: string;
}

export interface IAbility {
  ability: IAbility;
  is_hidden: boolean;
  slot: number;
}

export interface Sprites {
  back_default: string;
}


export interface IDescriptionPokemon {
  abilities: IAbility[];
  height: number;
  id: number;
  location_area_encounters: string;
  name: string;
  order: number;
  sprites: Sprites;
  weight: number;
}


