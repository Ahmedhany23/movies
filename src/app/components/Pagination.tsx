"use client";

import ReactPaginate from "react-paginate";
import { useCurrentPage } from "../context/useCurrentPage";
import Pagination from '@mui/material/Pagination';
export default function PaginationComponent({  count }: any) {

  const pageCount = count;
  const { currentPage, setCurrentPage } = useCurrentPage();
  const handlePageClick = () => {
    setCurrentPage(currentPage + 1);
   
  };

  return (
    <div className=" bg-white w-fit mx-auto py-2">
 <Pagination count={pageCount} page={currentPage} onChange={handlePageClick} shape="rounded" color="primary" />
    </div>
   
  );
}
