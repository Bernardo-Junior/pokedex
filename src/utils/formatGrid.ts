import { IDescriptionPokemon } from "../data/protocols/models/IUsePokemons";

export const formatData = (data: IDescriptionPokemon[], columns: number) => {
  const rows = Math.floor(data.length / columns);

  let lastRowElements = data.length - rows * columns;
  while(lastRowElements !== columns) {
    data.push({
      id: (lastRowElements + (Math.random() * (9999 - 1) + 1)),
      abilities: [],
      height: -1,
      name: "Empty",
      species: { name: "Empty", url: "Empty" },
      sprites: {
        back_default: "", 
        other: { 
          "official-artwork": { 
            front_default: "" 
          }, 
          dream_world: { 
            front_default: "", 
            front_female: "" 
          } 
        }
      },
      weight: -1

    })

    lastRowElements += 1;
  }

  return data;
}