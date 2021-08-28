import api from "../../infra/services/api";
import { IListPokemons, IUsePokemons, IDescriptionPokemon } from "../protocols/models/IUsePokemons";

export const usePokemons = (): IUsePokemons => {

  const fetchPokemons = async (offset: number): Promise<[IListPokemons, Boolean]> => {
    let resultFetch: IListPokemons = {} as IListPokemons;
    let resultError: Boolean = false;

    await api.get(`/pokemon?offset=${offset}&limit=20`)
      .then(response => {
        resultFetch = response.data
        resultError = false;
      })
      .catch(error => {
        console.log(error.response.data);
        resultError = true;
      })

    return [resultFetch, resultError]
  }

  const fetchDescriptionPokemons = async (offset: number): Promise<[IDescriptionPokemon, Boolean]> => {
    let resultDescription: IDescriptionPokemon = {} as IDescriptionPokemon;
    let resultError: Boolean = false;
    await api.get(`/pokemon?offset=${offset}&limit=20`)
      .then(response => {
        resultDescription = response.data
        resultError = false;
      })
      .catch(error => {
        console.log(error.response.data);
        resultError = true;
      })

    return [resultDescription, resultError]
  }

  return { fetchPokemons, fetchDescriptionPokemons }
}