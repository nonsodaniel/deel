import { useState, useEffect, useRef } from "react";
import Input from "../form/Input";
import "./container.css";

import { IPokemon } from "../types";
import StatusMessages from "./StatusMessages";
import Lists from "../list/Lists";
import { uuid } from "../../utils/helpers";

function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}

interface IAutocompleteProps {
  data: IPokemon[] | null;
  loading: boolean;
  error: string;
}
const AutoComplete = ({ data, loading, error }: IAutocompleteProps) => {
  const [pokemanMatch, setPokemanMatch] = useState<IPokemon[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<IPokemon[]>([]);
  const [isListsVisible, setIsListsVisible] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setIsListsVisible(false);
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    const matches = data.filter((pokemon: IPokemon) => {
      const regex = new RegExp(`${searchValue}`, "gi");
      const isSelected = selectedItems.some((s) => s.name === pokemon.name);
      return pokemon.name.match(regex) && !isSelected;
    });
    setPokemanMatch(matches);
  }, [searchValue, selectedItems, data]);

  const getName = (item: IPokemon) => {
    setSelectedItems([...selectedItems, item]);
  };

  const resetSearchValue = () => {
    setSearchValue("");
    setPokemanMatch([]);
  };
  const handleFocus = () => setIsListsVisible(true);

  if (!data) {
    return null;
  }

  const searchpokemans = (str: string) => {
    setSearchValue(str);
  };

  return (
    <div ref={containerRef} className="container" data-testid="container">
      <div className="container-wrap">
        <div className="auto-complete" data-testid="autocomplete">
          <div className="selected-items">
            {!!selectedItems.length &&
              selectedItems.map((item) => (
                <span className="selected-items__pill" key={uuid()}>
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
    </div>
  );
};

export default AutoComplete;