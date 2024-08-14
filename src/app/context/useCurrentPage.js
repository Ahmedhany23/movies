"use client";
import { createContext, useContext, useState } from "react";

const CurrentPageContext = createContext({
  currentPage: 1,
  setCurrentPage: () => {},
});


export const useCurrentPage = () => {
  return useContext(CurrentPageContext);
};


export const CurrentPageProvider = ({ children, initialValue = 1 }) => {
  const [currentPage, setCurrentPage] = useState(initialValue);

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};
