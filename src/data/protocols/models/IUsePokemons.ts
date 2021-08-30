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
  name: string;
  sprites: Sprites;
  species: ISpecies;
  weight: number;
}

export interface IComments {
  habitats: Array<IObject>;
  place: String;
  Foods: Array<IObject>;
  otherCuriosities: Array<IObject>;
}

export interface IObject {
  id: number;
  value: string;
}

export interface IDescriptionPokemonCaptured {
  abilities: IAbilities[];
  height: number;
  id: number;
  name: string;
  sprites: Sprites;
  species: ISpecies;
  weight: number;
  comments: IComments;
}


