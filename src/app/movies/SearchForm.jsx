"use client";

import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery, error } =
    useGlobalContext();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-xl mx-auto mb-16"
    >
      <h2 className="text-2xl text-gray-600 font-semibold mb-5 text-center capitalize">
        search movies
      </h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="w-full px-5 py-4 rounded-lg bg-zinc-900 border border-zinc-700 outline-none focus:border-yellow-500 text-white"
      />

      {error.show && (
        <p className="text-red-500 mt-4 text-center">
          {error.msg}
        </p>
      )}
    </form>
  );
};

export default SearchForm;