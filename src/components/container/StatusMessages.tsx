import { Fragment } from "react";
import { IPokemonComponentProps } from "../types";

const StatusMessages = ({
  searchValue,
  pokemanMatch,
  data,
  loading,
  error,
}: IPokemonComponentProps) => {
  console.log({ searchValue, pokemanMatch });
  return (
    <Fragment>
      {searchValue &&
        pokemanMatch.length === 0 &&
        pokemanMatch &&
        !!data.length && (
          <div className="messsage__container">No match found!</div>
        )}
      {loading && <div className="messsage__container">Loading...</div>}
      {!loading && error && <div className="messsage__container">{error}</div>}
    </Fragment>
  );
};

export default StatusMessages;
