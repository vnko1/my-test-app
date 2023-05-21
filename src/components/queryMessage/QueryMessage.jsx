import { useUsers } from "../../services";

const QueryMessage = () => {
  const { queryType } = useUsers();

  return <p>Nothing found in {queryType.title}!</p>;
};

export default QueryMessage;
