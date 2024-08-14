"use client";
import { useQuery } from "@tanstack/react-query";
import { Query_Keys } from "./querykeys";
import { getCategoryById } from "./fetchData";

export const useCategoryById = (id, page) => {
  return useQuery({
    queryKey: [Query_Keys.CATEGORYBYID, id, page],
    queryFn: () => getCategoryById(id, page),
  });
};
