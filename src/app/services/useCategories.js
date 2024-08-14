import { useQuery } from "@tanstack/react-query";
import { Query_Keys } from "./querykeys";
import { getCategories } from "./fetchData";
export const useCategories = () => {
  return useQuery({ queryKey: [Query_Keys.CATEGORY], queryFn: getCategories });
};
