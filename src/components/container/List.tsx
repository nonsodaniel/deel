interface IListProps {
  name: string;
}

const List = ({ name }: IListProps) => {
  return <li className="list__item">Name: {name}</li>;
};

export default List;
