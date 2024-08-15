import { useQuery } from "@tanstack/react-query";
import { Query_Keys } from "./querykeys";
import { getSimilarMovies } from "./fetchData";
export const useSimilarMovies = (id) => {
  return useQuery({
    queryKey: [Query_Keys.SIMILAR, id],
    queryFn: () => getSimilarMovies(id),
  });
};
