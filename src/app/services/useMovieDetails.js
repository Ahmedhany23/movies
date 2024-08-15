import { useQuery } from "@tanstack/react-query";
import {Query_Keys} from './querykeys'
import { getMovieDetails } from "./fetchData";
export const useMovieDetails = (id) => {
    return useQuery({queryKey : [Query_Keys.TRENDING , id], queryFn: () => getMovieDetails(id)})
}