import { useEffect, useState } from "react";
import Input from "../form/Input";
import "./container.css";

const Container = () => {
  const [pokemans, setPokemans] = useState([]);
  const [pokemanMatch, setPokemanMatch] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const loadpokemans = async () => {
      await fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => res.json())
        .then((data) => setPokemans(data.results));
    };
    loadpokemans();
  }, []);

  const searchpokemans = (str: string) => {
    setSearchValue(str);
    const matches = pokemans.filter((country) => {
      const regex = new RegExp(`${str}`, "gi");
      return country.name.match(regex);
    });
    setPokemanMatch(matches);
  };
  console.log({ pokemanMatch, searchValue, pokemans });
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
          onChange={(event) => searchpokemans(event.target.value)}
        />
        <div className="dropdown">
          <ul
            className="list-wrap"
            style={{
              border: !!pokemanMatch.length
                ? "1px solid rgba(0, 0, 0, 0.125)"
                : "none",
            }}
          >
            {pokemanMatch &&
              pokemanMatch.map((item, index) => {
                return <li className="list__item">Name: {item.name}</li>;
              })}
            {searchValue && pokemanMatch.length === 0 && !!pokemans.length && (
              <li className="notFound__listitem">No match found!</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Container;
