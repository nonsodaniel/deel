import { Fragment } from "react";
import { IPokemonComponentProps } from "../types";

const StatusMessages = ({
  searchValue,
  pokemanMatch,
  data,
  loading,
  error,
}: IPokemonComponentProps) => {
  const noMatch =
    searchValue && data && pokemanMatch.length === 0 && pokemanMatch;

  return (
    <Fragment>
      {noMatch && <div className="messsage__container">No match found!</div>}
      {loading && <div className="messsage__container">Loading...</div>}
      {!loading && error && <div className="messsage__container">{error}</div>}
    </Fragment>
  );
};

export default StatusMessages;
