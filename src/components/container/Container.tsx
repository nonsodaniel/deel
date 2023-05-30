import "./container.css";
import useFetch from "../../hooks/useFetch";
import { IPokemon } from "../types";
import AutoComplete from "./Autocomplete";

const Container = () => {
  const { data, loading, error } = useFetch<IPokemon[]>(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  return <AutoComplete data={data} loading={loading} error={error} />;
};

export default Container;
