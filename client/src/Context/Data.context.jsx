import React, { createContext, useState } from "react";
import useFetchData from "../utils/useFetchData.utils";

//context for sharing movie data
export const DataContext = createContext();

//provider componenet to wrap aroud dependent components

export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState(""); //manage query for searchbar
  const { data, loading, error, fetchMoreData, } = useFetchData(query); //using custom fetcher hook

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        fetchMoreData,
        setQuery
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
