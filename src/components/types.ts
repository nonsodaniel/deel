export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonComponentProps {
  pokemonMatch: IPokemon[];
  searchValue: string;
  data?: IPokemon[];
  loading: boolean;
  error: string;
  getName?: any;
}
