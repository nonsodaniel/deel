import { uuid } from "../../utils/helpers";
import { IPokemonComponentProps } from "../types";
import List from "./List";

const Lists = ({
  pokemonMatch,
  searchValue,
  getName,
}: IPokemonComponentProps) => {
  return (
    <div className="dropdown">
      <ul
        className="list-wrap"
        style={{
          border: !!pokemonMatch.length
            ? "1px solid rgba(0, 0, 0, 0.125)"
            : "none",
        }}
      >
        {pokemonMatch &&
          pokemonMatch.map((item) => {
            return (
              <List
                key={uuid()}
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
