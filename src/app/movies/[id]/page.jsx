"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import useFetch from "../useFetch";
import Loading from "../loading";

export default function SingleMovie({
  params,
}) {
  const { id } = use(params);

  const {
    isLoading,
    error,
    data: movie,
  } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <Loading />;
  }

  if (error.show) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        
        <h1 className="text-3xl font-bold mb-6">
          {error.msg}
        </h1>

        <Link
          href="/movies"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Back To Movies
        </Link>
      </div>
    );
  }

  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
  } = movie;

  return (
    <section className="min-h-screen bg-linear-to-br from-orange-50 via-white text-gray-700 to-orange-100 overflow-hidden py-20 px-6">
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="relative w-full h-150 rounded-xl overflow-hidden mt-4">
          <Image
            src={poster}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-6">
            {title}
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            {plot}
          </p>

          <h4 className="text-yellow-400 text-2xl mb-8">
            {year}
          </h4>

          <Link
            href="/movies"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Back To Movies
          </Link>
        </div>

      </div>
    </section>
  );
}