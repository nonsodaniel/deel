import React from "react";
import { IPokemon } from "../types";
interface IListProps {
  pokemanMatch: IPokemon[];
  searchValue: string;
  data: IPokemon[];
}

const List = ({ pokemanMatch, searchValue, data }: IListProps) => {
  return (
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
        {searchValue && pokemanMatch.length === 0 && !!data.length && (
          <li className="notFound__listitem">No match found!</li>
        )}
      </ul>
    </div>
  );
};

export default List;
