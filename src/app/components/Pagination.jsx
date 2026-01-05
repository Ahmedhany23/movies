"use client";
import { ChangeEvent } from "react";
import { useCurrentPage } from "../context/useCurrentPage";
import Pagination from "@mui/material/Pagination";

export default function PaginationComponent({ count }) {
  const { currentPage, setCurrentPage } = useCurrentPage();

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="bg-white w-fit mx-auto py-2">
      <Pagination
        count={count}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
        color="primary"
      />
    </div>
  );
}
