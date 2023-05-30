import { uuid } from "../../utils/helpers";

interface IListProps {
  name: string;
  getName: any;
  url: string;
  searchValue: string;
}

const List = ({ name, getName, url, searchValue }: IListProps) => {
  const renderHighlightedText = (
    word: string,
    highlightedText: string
  ): JSX.Element => {
    const splitStrings = word.split(new RegExp(`(${highlightedText})`, "gi"));
    return (
      <span>
        {splitStrings.map((string) => (
          <span
            key={uuid()}
            style={
              string.toLowerCase() === highlightedText.toLowerCase()
                ? { fontWeight: "bold" }
                : {}
            }
          >
            {string}
          </span>
        ))}
      </span>
    );
  };
  return (
    <li
      className="list__item pointer"
      id={url}
      onClick={(event) =>
        getName({ id: (event.target as HTMLInputElement).id, name })
      }
    >
      {renderHighlightedText(name, searchValue)}
    </li>
  );
};

export default List;
