"use client";

import Loading from "./Loading";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SingleCocktail() {
  const params = useParams();
  const id = params.id;

  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }

    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 via-white to-orange-100 px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-12 text-center border border-orange-100">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            No cocktail found 🍹
          </h2>

          <Link
            href="/cocktails"
            className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-orange-600 transition"
          >
            Back Home
          </Link>
        </div>
      </section>
    );
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail;

  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-orange-50 via-white to-orange-100 px-6 py-20">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -translate-x-24 -translate-y-24"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl translate-x-20 translate-y-20"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-linearbg-linear(to_right,#f97316_1px,transparent_1px),linear-linearbg-linear(to_bottom,#f97316_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      <div className="relative max-w-7xl mx-auto z-10">

        {/* Back Button */}
        <div className="mb-12 text-center">
          <Link
            href="/cocktails"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-7 py-3  rounded-2xl font-semibold shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300"
          >
            ← Back Home
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-6">

          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-orange-400 to-orange-600 mb-5">
            {name}
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-9">
            Discover the ingredients, flavor profile, and preparation
            details behind this beautifully crafted cocktail.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Image Card */}
          <div className="relative group">

            <div className="absolute -inset-2 bg-linear-to-r from-orange-400 to-orange-600 rounded-4xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative overflow-hidden rounded-4xl shadow-2xl border border-orange-100 bg-white">

              <Image
                src={image}
                alt={name}
                width={700}
                height={700}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

            </div>
          </div>

          {/* Details Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-4xl shadow-2xl p-8 md:p-10 border border-orange-100 space-y-8">

            {/* Top Info */}
            <div className="grid sm:grid-cols-2 gap-5">

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500 mb-2">
                  Category
                </p>

                <h3 className="text-xl font-bold text-gray-700">
                  {category}
                </h3>
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500 mb-2">
                  Type
                </p>

                <h3 className="text-xl font-bold text-gray-700">
                  {info}
                </h3>
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 shadow-sm sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500 mb-2">
                  Recommended Glass
                </p>

                <h3 className="text-xl font-bold text-gray-700">
                  {glass}
                </h3>
              </div>

            </div>

            {/* Instructions */}
            <div>

              <h3 className="text-3xl font-bold text-orange-500 mb-5">
                Instructions
              </h3>

              <p className="text-lg leading-9 text-gray-700">
                {instructions}
              </p>

            </div>

            {/* Ingredients */}
            <div>

              <h3 className="text-3xl font-bold text-orange-500 mb-5">
                Ingredients
              </h3>

              <div className="flex flex-wrap gap-4">

                {ingredients.map((item, index) =>
                  item ? (
                    <span
                      key={index}
                      className="bg-linear-to-r from-orange-500 to-orange-400 text-white px-5 py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:scale-105 transition duration-300"
                    >
                      {item}
                    </span>
                  ) : null
                )}

              </div>
            </div>

             

          </div>
        </div>
    
      </div>
    </section>
  );
}