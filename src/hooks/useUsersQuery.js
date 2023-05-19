import { useFetchUsersQuery } from "../redux/index";
import { fetchType } from "../services/constants";

fetchType;

export const useUsersQuery = (type) => {
  if (type === fetchType.PAGINATION) return useFetchUsersQuery;
  if (type === fetchType.ALLUSERS) return useFetchAllUsersQuery;
  if (type === fetchType.FILTREDUSERS) return useFetchFiltredUsersQuery;
};
