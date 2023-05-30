import { IPokemonComponentProps } from "../types";
import List from "./List";

const Lists = ({
  pokemanMatch,
  searchValue,
  getName,
}: IPokemonComponentProps) => {
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
          pokemanMatch.map((item) => {
            return (
              <List
                key={item.url}
                url={item.url}
                name={item.name}
                getName={getName}
                searchValue={searchValue}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Lists;
