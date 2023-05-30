interface IListProps {
  name: string;
  getName: any;
  url: string;
  searchValue: string;
}

const List = ({ name, getName, url, searchValue }: IListProps) => {
  console.log("searchValue", { searchValue, name });
  return (
    <li
      className="list__item"
      id={url}
      onClick={(event) =>
        getName({ id: (event.target as HTMLInputElement).id, name })
      }
      style={{ color: searchValue.includes(name) ? "red" : "" }}
    >
      Name: {name}
    </li>
  );
};

export default List;
