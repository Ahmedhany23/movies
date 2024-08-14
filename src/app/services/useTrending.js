import { useQuery } from "@tanstack/react-query";
import {Query_Keys} from './querykeys'
import { getTrending } from "./fetchData";
export const useTrending = () => {
    return useQuery({queryKey : [Query_Keys.TRENDING], queryFn: getTrending})
}