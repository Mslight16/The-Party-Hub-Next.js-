"use client";

import { createContext, useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");

  const {
    isLoading,
    error,
    data: movies,
  } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};