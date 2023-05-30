export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonComponentProps {
  pokemanMatch: IPokemon[];
  searchValue: string;
  data?: IPokemon[];
  loading: boolean;
  error: string;
  getName?: any;
}
