import { useState } from "react";
import Input from "../form/Input";
import "./container.css";
import useFetch from "../../hooks/useFetch";
import { IPokemon } from "../types";
import Lists from "./Lists";

const Container = () => {
  const [pokemanMatch, setPokemanMatch] = useState<IPokemon[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, loading, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  const searchpokemans = (str: string) => {
    setSearchValue(str);
    const matches = data.filter((pokemon: IPokemon) => {
      const regex = new RegExp(`${str}`, "gi");
      return pokemon.name.match(regex);
    });
    console.log(matches);
    setPokemanMatch(matches);
  };

  return (
    <div className="container">
      <div className="auto-complete">
        <Input
          type="text"
          id="name"
          className="form-control search-box"
          value={searchValue}
          placeholder={"Enter Pokeman name"}
          required={true}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            searchpokemans(event.target.value)
          }
        />
        <Lists
          pokemanMatch={pokemanMatch}
          searchValue={searchValue}
          data={data}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Container;
