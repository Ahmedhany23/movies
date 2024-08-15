import { useQuery } from "@tanstack/react-query";
import {Query_Keys} from './querykeys'
import { getPageBySearch } from "./fetchData";
export const useSearch = (query,page) => {
    return useQuery({queryKey : [Query_Keys.SEARCH , query , page], queryFn:()=> getPageBySearch(query,page)})
}