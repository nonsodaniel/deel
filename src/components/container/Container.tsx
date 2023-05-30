import { useState } from "react";
import Input from "../form/Input";
import "./container.css";
import useFetch from "../../hooks/useFetch";
import { IPokemon } from "../types";
import StatusMessages from "./StatusMessages";
import Lists from "../list/Lists";

const Container = () => {
  const [pokemanMatch, setPokemanMatch] = useState<IPokemon[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<IPokemon[]>([]);
  const [isListsVisible, setIsListsVisible] = useState<boolean>(false);
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

  const getName = (item: IPokemon) => {
    handleFocus();
    setSelectedItems([...selectedItems, item]);
  };

  console.log(selectedItems);
  const resetSearchValue = () => {
    setSearchValue("");
    setPokemanMatch([]);
  };
  const handleFocus = () => setIsListsVisible(true);
  return (
    <div
      className="container"
      data-testid="container"
      onMouseDown={() => setIsListsVisible(false)}
    >
      <div className="auto-complete" data-testid="autocomplete">
        <div className="selected-items">
          {!!selectedItems.length &&
            selectedItems.map((item) => (
              <span className="selected-items__pill" key={item.url}>
                {item.name}
              </span>
            ))}
        </div>
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
          onFocus={handleFocus}
          resetSearchValue={resetSearchValue}
          displayResetIcon={true}
          dataTestId={"search-bar"}
        />
        {isListsVisible && (
          <Lists
            pokemanMatch={pokemanMatch}
            searchValue={searchValue}
            data={data}
            loading={loading}
            error={error}
            getName={getName}
          />
        )}

        <StatusMessages
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
