"use client";

import Link from "next/link";
import CocktailList from "./components/CocktailList";
import SearchForm from "./components/SearchForm";

export default function CocktailsPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 overflow-hidden">

  {/* Hero Section */}
  <section className="relative  py-10">

    {/* Decorative Blurs */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>

    <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl translate-x-24 translate-y-24"></div>

    {/* Grid Pattern */}
    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-size-[60px_60px]"></div>

    <div className="relative max-w-6xl mx-auto text-center z-10">


      {/* Main Heading */}
       <div className="text-center mt-20 mb-10">
          <h2 className="text-5xl font-bold capitalize text-gray-800">
            Our Cocktails
          </h2>

          <div className="w-20 h-1 bg-yellow-700 mx-auto mt-4 rounded"></div>
        </div>

      {/* Subtitle */}
      <p className="max-w-4xl mx-auto text-lg md:text-2xl leading-10 text-gray-700 mb-12 font-light">
        Discover a curated world where cocktails become
        <span className="font-semibold text-orange-500"> art, flavor, </span>
        and unforgettable experiences.
        <br className="hidden md:block" />
        Explore stunning creations crafted with creativity and passion.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

        <Link
          href="/cocktails/about"
          className="group relative inline-flex items-center gap-3 bg-orange-500 text-white px-9 py-4 rounded-2xl text-lg font-bold shadow-xl hover:bg-orange-600 hover:scale-105 transition duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

          About Us →

        </Link>

        <a
          href="#cocktails"
          className="inline-flex items-center gap-2 border-2 border-orange-300 text-orange-500 px-9 py-4 rounded-2xl text-lg font-semibold hover:bg-orange-100 hover:border-orange-400 transition duration-300"
        >
          Explore Drinks 🍸
        </a>
        

      </div>
       <SearchForm />

    </div>
  </section>
 

  {/* Cocktails */}
  <div id="cocktails">
    <CocktailList />
  </div>

</main>
  );
}