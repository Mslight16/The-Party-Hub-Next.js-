"use client";

import Link from "next/link";
import Image from "next/image";
import { useGlobalContext } from "./context";
import Loading from "./loading";
import { div } from "framer-motion/client";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } =
    useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ml-5 mr-5 ">
      {movies.map((movie) => {
        const {
          imdbID: id,
          Poster: poster,
          Title: title,
          Year: year,
        } = movie;

        return (
            
          <Link
            href={`/movies/${id}`}
            key={id}
            className="group"
          >
            <article className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
              
              <div className="relative w-full h-100">
                <Image
                  src={poster === "N/A" ? url : poster}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h4 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition">
                  {title}
                </h4>

                <p className="text-zinc-400">
                  {year}
                </p>
              </div>

            </article>
          </Link>
        );
      })}
    </section>
  
  );
};

export default Movies;