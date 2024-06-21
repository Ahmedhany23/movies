import ReactPaginate from "react-paginate"

export default function Pagination({getPage,count,currentpage}:any) {
    const pageCount = count ;
    const handlePageClick = (data:any) =>{
      
        getPage(data.selected + 1)
    }
  return (
    <>
     <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        marginPagesDisplayed={currentpage}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex gap-5  p-3 bg-[var(--blue-dark)] mt-20 w-fit mx-auto justify-center items-center text-white"
        activeClassName="text-[var(--light-color)]"
        pageClassName="hover:text-[var(--light-color)]"
      />
      </>
  )
  
   
}
