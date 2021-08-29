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

export interface IAbilities {
  ability: IAbility;
  is_hidden: boolean;
  slot: number;
}

export interface Sprites {
  back_default: string;
  other: Other;
}

export interface Other {
  dream_world: DreamWorld;
  "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface DreamWorld {
  front_default: string;
  front_female?: any;
}

export interface ISpecies {
  name: string;
  url: string;
}




export interface IDescriptionPokemon {
  abilities: IAbilities[];
  height: number;
  id: number;
  location_area_encounters: string;
  name: string;
  order: number;
  sprites: Sprites;
  species: ISpecies;
  weight: number;
}


