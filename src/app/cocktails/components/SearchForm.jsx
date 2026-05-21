"use client";

import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className=" py-6">

      <form
        className="max-w-3xl mx-auto bg-orange-50 shadow-lg rounded-3xl p-8 border border-orange-100"
        onSubmit={handleSubmit}
      >

        <div className="flex flex-col gap-4">

          <label
            htmlFor="name"
            className="text-2xl font-semibold text-orange-500 capitalize"
          >
            Search Your Favorite Cocktail
          </label>

          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
            placeholder="e.g. Margarita"
            className="w-full px-5 py-4 rounded-2xl border border-orange-200 outline-none text-lg text-gray-800 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
          />

        </div>
      </form>
    </section>
  );
}