import { IPokemon } from "../types";
import List from "./List";
interface IListProps {
  pokemanMatch: IPokemon[];
  searchValue: string;
  data: IPokemon[];
  loading: boolean;
  error: string;
}

const Lists = ({
  pokemanMatch,
  searchValue,
  data,
  loading,
  error,
}: IListProps) => {
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
            return <List key={item.url} name={item.name} />;
          })}
        {searchValue && pokemanMatch.length === 0 && !!data.length && (
          <li className="messsage__container">No match found!</li>
        )}
        {loading && <li className="messsage__container">Loading...</li>}
        {!loading && error && <li className="messsage__container">{error}</li>}
      </ul>
    </div>
  );
};

export default Lists;
