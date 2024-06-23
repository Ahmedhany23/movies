"use client";

import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

export default function Pagination({ getPage, getPageBySearch, getAllMovie, count, currentpage, query, id }: any) {
  const dispatch = useDispatch();
  const pageCount = count;

  const handlePageClick = (data: any) => {
    const selectedPage = data.selected + 1;

    if (getAllMovie) {
      dispatch(getAllMovie(selectedPage));
    } else if (getPageBySearch) {
      dispatch(getPageBySearch(query, selectedPage));
    } else if (getPage) {
     getPage( selectedPage);
    }
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      marginPagesDisplayed={currentpage}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName="flex gap-5 p-3 bg-[var(--blue-dark)] mt-20 w-fit mx-auto justify-center items-center text-white"
      activeClassName="text-[var(--light-color)]"
      pageClassName="hover:text-[var(--light-color)]"
    />
  );
}
