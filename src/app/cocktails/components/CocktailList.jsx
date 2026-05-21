"use client";

import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loading />
      </div>
    );
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="text-center text-3xl font-semibold text-gray-700 py-20">
        No cocktails matched your search 🍹
      </h2>
    );
  }

  return (
    <section className="px-6 py-6 bg-white min-h-screen">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-gray-700 mb-14">
          Cocktails
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />;
          })}

        </div>
      </div>
    </section>
  );
}