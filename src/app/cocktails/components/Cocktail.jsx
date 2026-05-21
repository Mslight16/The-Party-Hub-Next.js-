"use client";

import Link from "next/link";
import Image from "next/image";

export default function Cocktail({
  image,
  name,
  id,
  info,
  glass,
}) {
  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-orange-100 group">

      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6 space-y-3">

        <h3 className="text-2xl font-bold text-gray-800">
          {name}
        </h3>

        <h4 className="text-lg font-semibold text-orange-500">
          {glass}
        </h4>

        <p className="text-gray-600 leading-7">
          {info}
        </p>

        <Link
          href={`/cocktails/${id}`}
          className="inline-block mt-4 bg-orange-500 text-white px-5 py-2 rounded-xl font-medium hover:bg-orange-600 transition"
        >
          Details
        </Link>

      </div>
    </article>
  );
}